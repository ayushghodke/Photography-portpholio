import { FaHeart } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-black py-8 border-t border-gray-900 text-center">
            <div className="container mx-auto px-6">
                <p className="text-gray-500 flex items-center justify-center gap-2">
                    &copy; {new Date().getFullYear()} Ayush Ghodke. All rights reserved.
                </p>
                <p className="text-gray-700 text-sm mt-2">
                    Designed for high-impact visuals.
                </p>
            </div>
        </footer>
    )
}

export default Footer
