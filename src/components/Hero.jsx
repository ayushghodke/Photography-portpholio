import { motion } from 'framer-motion'
import { FaPlay, FaArrowDown } from 'react-icons/fa'

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/20260210_135039.webp"
                    alt="Cinematography Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-9xl font-black text-white uppercase leading-none tracking-tighter mb-6 drop-shadow-2xl"
                >
                    Digital Creator <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">& Photographer</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light tracking-wide"
                >
                    Crafting visual narratives with light, shadow, and emotion. Based in Pune.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <a href="#motion" className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-wider hover:bg-gray-200 transition-all transform hover:scale-105">
                        <FaPlay className="text-sm" /> Watch Showreel
                    </a>
                    <a href="#stills" className="px-8 py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white rounded-full font-bold uppercase tracking-wider hover:bg-white/10 transition-all">
                        View Portfolio
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
            >
                <FaArrowDown />
            </motion.div>
        </section>
    )
}

export default Hero
