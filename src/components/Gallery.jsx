import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { galleryImages } from '../data/images'
import { FaTimes, FaExpand } from 'react-icons/fa'
import Button from './Button'

// Defined categories as requested
const categories = ['Portrait', 'Still Captures', 'All Pictures'];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null)
    const [visibleCount, setVisibleCount] = useState(9)
    const [activeCategory, setActiveCategory] = useState('Portrait')

    const filteredImages = useMemo(() => {
        if (activeCategory === 'All Pictures') return galleryImages;
        return galleryImages.filter(img => img.category === activeCategory);
    }, [activeCategory]);

    const showMore = () => {
        setVisibleCount(prev => prev + 9)
    }

    // Handle case where images might not be loaded yet
    if (!galleryImages) return null;

    return (
        <section id="stills" className="py-20 bg-black text-white">
            <div className="container mx-auto px-6">
                <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-yellow-500 font-bold uppercase tracking-widest text-sm text-center mb-2"
                >
                    Gallery
                </motion.h4>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold uppercase text-center mb-10"
                >
                    {activeCategory}
                </motion.h2>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => { setActiveCategory(category); setVisibleCount(9); }}
                            className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all border ${activeCategory === category
                                ? 'bg-yellow-500 text-black border-yellow-500'
                                : 'bg-transparent text-gray-400 border-gray-700 hover:border-white hover:text-white'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode='popLayout'>
                        {filteredImages.slice(0, visibleCount).map((image) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={image.src}
                                onClick={() => setSelectedImage(image.src)}
                                className="relative aspect-[3/4] cursor-pointer group overflow-hidden rounded-lg bg-gray-900"
                            >
                                <img
                                    src={`/images/${image.src}`}
                                    alt={`Portfolio ${image.category}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest absolute top-4 left-4">
                                        {image.category}
                                    </span>
                                    <FaExpand className="text-white text-3xl" />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredImages.length === 0 && (
                    <div className="text-center text-gray-500 py-10">
                        No images found in this category.
                    </div>
                )}

                {visibleCount < filteredImages.length && (
                    <div className="flex justify-center mt-12">
                        <Button onClick={showMore} variant="outline">
                            Load More
                        </Button>
                    </div>
                )}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white text-4xl hover:text-yellow-500 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <FaTimes />
                        </button>
                        <motion.img
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            src={`/images/${selectedImage}`}
                            alt="Selected"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl shadow-black"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Gallery
