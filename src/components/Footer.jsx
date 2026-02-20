import { FaYoutube, FaInstagram, FaCamera } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-black py-10 border-t border-gray-900 text-center">
            <div className="container mx-auto px-6 flex flex-col items-center gap-6">

                {/* Brand */}
                <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white uppercase">
                    <FaCamera className="text-yellow-500" />
                    <span>Ayush<span className="text-yellow-500">Ghodke</span></span>
                </a>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://www.youtube.com/@techinair"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-zinc-900 text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300"
                        aria-label="YouTube"
                    >
                        <FaYoutube size={20} />
                    </a>
                    <a
                        href="https://www.instagram.com/tech_in_air_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-zinc-900 text-gray-400 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={20} />
                    </a>
                </div>

                {/* Copyright */}
                <div>
                    <p className="text-gray-600 text-sm">
                        &copy; {new Date().getFullYear()} Ayush Ghodke. All rights reserved.
                    </p>
                    <p className="text-gray-800 text-xs mt-1">
                        Photographer · Videographer · Content Creator
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
