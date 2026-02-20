import { motion } from 'framer-motion'
import { FaYoutube, FaInstagram, FaExternalLinkAlt, FaPlay } from 'react-icons/fa'

const ContentCreator = () => {
    return (
        <section id="content" className="py-20 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-yellow-500 font-bold uppercase tracking-widest text-sm text-center mb-2"
                >
                    Beyond The Lens
                </motion.h4>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold uppercase text-center mb-4"
                >
                    Content Creator
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-center max-w-xl mx-auto mb-16 text-lg"
                >
                    I create cinematic content for YouTube &amp; Instagram — from travel films and tech explorations to commercial productions.
                </motion.p>

                {/* Two-column: YouTube + Instagram */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

                    {/* YouTube Card */}
                    <motion.a
                        href="https://www.youtube.com/@techinair"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ y: -8, scale: 1.01 }}
                        className="group relative bg-zinc-900 rounded-2xl border border-gray-800 hover:border-red-500/60 transition-all duration-300 overflow-hidden block"
                    >
                        {/* Red top accent bar */}
                        <div className="h-1 w-full bg-gradient-to-r from-red-600 to-red-400"></div>

                        <div className="p-8 flex flex-col gap-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-red-600/20 rounded-full group-hover:bg-red-600/40 transition-colors">
                                        <FaYoutube size={32} className="text-red-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">YouTube</h3>
                                        <p className="text-gray-500 text-sm">@techinair</p>
                                    </div>
                                </div>
                                <FaExternalLinkAlt className="text-gray-600 group-hover:text-red-400 transition-colors" />
                            </div>

                            <p className="text-gray-400 leading-relaxed">
                                Cinematic travel vlogs, tech deep-dives, and behind-the-scenes production content. Every video is a visual story.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {['Travel Films', 'Tech Reviews', 'Vlogs', 'BTS Content'].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 text-red-400 font-semibold text-sm group-hover:gap-4 transition-all duration-300">
                                <FaPlay size={12} />
                                Watch on YouTube
                            </div>
                        </div>
                    </motion.a>

                    {/* Instagram Card */}
                    <motion.a
                        href="https://www.instagram.com/tech_in_air_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 }}
                        whileHover={{ y: -8, scale: 1.01 }}
                        className="group relative bg-zinc-900 rounded-2xl border border-gray-800 hover:border-pink-500/60 transition-all duration-300 overflow-hidden block"
                    >
                        {/* Instagram gradient top bar */}
                        <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400"></div>

                        <div className="p-8 flex flex-col gap-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-pink-600/20 rounded-full group-hover:bg-pink-600/40 transition-colors">
                                        <FaInstagram size={32} className="text-pink-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Instagram</h3>
                                        <p className="text-gray-500 text-sm">@tech_in_air_</p>
                                    </div>
                                </div>
                                <FaExternalLinkAlt className="text-gray-600 group-hover:text-pink-400 transition-colors" />
                            </div>

                            <p className="text-gray-400 leading-relaxed">
                                Visual stories, reels, and curated photography — a daily feed of moments captured through a creative lens.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {['Reels', 'Photography', 'Stories', 'Edits'].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-xs font-medium bg-pink-500/10 text-pink-400 border border-pink-500/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 text-pink-400 font-semibold text-sm group-hover:gap-4 transition-all duration-300">
                                <FaInstagram size={12} />
                                Follow on Instagram
                            </div>
                        </div>
                    </motion.a>
                </div>

                {/* Commercial / Sample Video Embed */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="rounded-2xl border border-gray-800 overflow-hidden bg-zinc-900"
                >
                    <div className="p-6 border-b border-gray-800 flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-white">Sample Commercial Work</h3>
                            <p className="text-gray-500 text-sm mt-1">A glimpse into professional production quality</p>
                        </div>
                        <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 uppercase tracking-widest">
                            Commercial
                        </span>
                    </div>

                    {/* YouTube embed — replace VIDEO_ID with the actual sample video ID */}
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed?listType=user_uploads&list=techinair"
                            title="Commercial Video Sample – Ayush Ghodke"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default ContentCreator
