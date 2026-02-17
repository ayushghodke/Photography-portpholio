import { motion } from 'framer-motion'

const About = () => {
    return (
        <section id="about" className="py-20 bg-black text-white">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                {/* Image/Visual Side effects */}
                <div className="w-full md:w-1/2">
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Using a representative image from the list as a bio pic replacement for now */}
                        <img
                            src="/images/20260210_135039.webp"
                            alt="Ayush Ghodke"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 border-2 border-yellow-500/20 m-4 rounded-lg"></div>

                    </div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 space-y-6">
                    <motion.h4
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-yellow-500 font-bold uppercase tracking-widest text-sm"
                    >
                        The Visionary
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold uppercase leading-tight"
                    >
                        Behind The Lens
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg leading-relaxed"
                    >
                        Based in <strong>Pune</strong>, I am a passionate photographer and content creator dedicated to capturing life's most compelling moments. With a keen eye for detail and a love for storytelling, I specialize in transforming ordinary scenes into cinematic experiences.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-lg leading-relaxed"
                    >
                        Whether it's a high-energy commercial shoot, a serene landscape, or a personal portrait, my goal is to create visuals that resonate and inspire.
                    </motion.p>

                    <div className="grid grid-cols-2 gap-6 pt-6">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">City</h3>
                            <p className="text-gray-400">Pune, India</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Experience</h3>
                            <p className="text-gray-400">Photography, Videography & Editing</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
