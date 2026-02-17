import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Source: The user's "My clicks" folder
const sourceDir = path.resolve(__dirname, '..', 'My clicks');
// Destination: public/images
const outputDir = path.join(__dirname, 'public', 'images');
// Data file: src/data/images.js
const dataFile = path.join(__dirname, 'src', 'data', 'images.js');

console.log(`Source: ${sourceDir}`);
console.log(`Output: ${outputDir}`);

if (!fs.existsSync(sourceDir)) {
    console.error(`Source directory not found: ${sourceDir}`);
    process.exit(1);
}

// Ensure output directory exists (and maybe clean it? No, just ensure it exists)
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

let galleryData = [];

async function processFile(filePath, relativePath, category) {
    if (filePath.match(/\.(jpg|jpeg|png)$/i)) {
        // Change extension to .webp
        const webpRelativePath = relativePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        const outputFilePath = path.join(outputDir, webpRelativePath);
        const outputFolder = path.dirname(outputFilePath);

        if (!fs.existsSync(outputFolder)) {
            fs.mkdirSync(outputFolder, { recursive: true });
        }

        try {
            console.log(`Converting: [${category}] ${path.basename(filePath)}`);

            await sharp(filePath)
                .rotate() // Auto-orient
                .resize({ width: 1920, withoutEnlargement: true })
                .webp({ quality: 80 })
                .toFile(outputFilePath);

            // Store web path (forward slashes)
            // If category is General, we might want to just show the filename, 
            // but for consistency let's use the relative path found.
            // Actually, for "General" images in root, relativePath is just "image.jpg".
            // For "Portrait/image.jpg", relativePath is "Portrait/image.jpg".
            const webPath = webpRelativePath.split(path.sep).join('/');

            galleryData.push({
                src: webPath,
                category: category
            });

        } catch (err) {
            console.error(`Error processing ${filePath}:`, err);
        }
    }
}

async function processDirectory(dir, relativeDir = '') {
    const items = fs.readdirSync(dir);

    for (const item of items) {
        // Skip hidden files/folders
        if (item.startsWith('.')) continue;

        const fullPath = path.join(dir, item);
        let stat;
        try {
            stat = fs.statSync(fullPath);
        } catch (e) {
            continue;
        }

        if (stat.isDirectory()) {
            // Recursively process
            // If we are in root, this folder name IS the category.
            // If we are deeper, it effectively stays part of that category chain, 
            // but for this simple app, let's treat top-level folders as categories.
            await processDirectory(fullPath, path.join(relativeDir, item));
        } else {
            // It's a file
            // Category determined by the top-level folder relative to source
            // relativeDir ex: "Portrait" or "Still Captures" or "" (root)
            let category = 'General';
            if (relativeDir) {
                const parts = relativeDir.split(path.sep);
                category = parts[0]; // Top level folder name
            } else {
                // If in root, maybe we can categorize as "General" or "Featured"
                category = 'General';
            }

            await processFile(fullPath, path.join(relativeDir, item), category);
        }
    }
}

async function main() {
    console.log("Starting image optimization...");
    await processDirectory(sourceDir);

    // Format data for JS file
    // We want: export const galleryImages = [ { src: '...', category: '...' }, ... ];
    const fileContent = `export const galleryImages = ${JSON.stringify(galleryData, null, 2)};`;

    fs.writeFileSync(dataFile, fileContent);
    console.log(`\nDone! Generated ${dataFile}`);
    console.log(`Total images: ${galleryData.length}`);
}

main();
