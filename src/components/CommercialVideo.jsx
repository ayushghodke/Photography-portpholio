import { motion } from 'framer-motion'

const CommercialVideo = () => {
    return (
        <section id="commercial" className="py-16 bg-zinc-900 text-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="rounded-2xl border border-gray-800 overflow-hidden bg-black"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-800 flex items-center justify-between flex-wrap gap-3">
                            <div>
                                <h3 className="text-xl font-bold text-white">Commercial Work — Girumukh</h3>
                                <p className="text-gray-500 text-sm mt-1">A cinematic commercial produced for a manufacturing unit</p>
                            </div>
                            <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 uppercase tracking-widest">
                                Commercial
                            </span>
                        </div>

                        {/* YouTube Shorts embed — vertical 9:16 */}
                        <div className="flex justify-center bg-black py-6">
                            <div className="relative w-full max-w-sm" style={{ paddingBottom: 'min(177.78%, 85vh)' }}>
                                <iframe
                                    className="absolute inset-0 w-full h-full rounded-xl"
                                    src="https://www.youtube.com/embed/tQdfr0r4b7c"
                                    title="Gurumukh Commercial — Ayush Ghodke"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="rounded-2xl border border-gray-800 overflow-hidden bg-black"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-800 flex items-center justify-between flex-wrap gap-3">
                            <div>
                                <h3 className="text-xl font-bold text-white">Content Creation</h3>
                                <p className="text-gray-500 text-sm mt-1">Short-form video content</p>
                            </div>
                            <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/30 uppercase tracking-widest">
                                Content
                            </span>
                        </div>

                        {/* YouTube Shorts embed — vertical 9:16 */}
                        <div className="flex justify-center bg-black py-6">
                            <div className="relative w-full max-w-sm" style={{ paddingBottom: 'min(177.78%, 85vh)' }}>
                                <iframe
                                    className="absolute inset-0 w-full h-full rounded-xl"
                                    src="https://www.youtube.com/embed/Oys-f05--7w"
                                    title="Content Creation"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default CommercialVideo
