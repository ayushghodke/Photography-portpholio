import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaInstagram } from 'react-icons/fa'

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-zinc-900 text-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-2">
                        Get In Touch
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-bold uppercase">
                        Let's Collaborative
                    </h2>
                </motion.div>

                <div className="flex justify-center">
                    {/* Contact Info - Centered since form is gone */}
                    <div className="space-y-8 max-w-lg w-full bg-black p-8 rounded-2xl border border-gray-800">
                        <h3 className="text-2xl font-bold mb-6 text-center">Contact Details</h3>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-zinc-900 rounded-lg text-yellow-500">
                                <FaPhone size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-300">Phone</h4>
                                <a href="tel:9021512179" className="text-lg hover:text-yellow-500 transition-colors">
                                    +91 90215 12179
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-zinc-900 rounded-lg text-yellow-500">
                                <FaEnvelope size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-300">Email</h4>
                                <a href="mailto:ayushghodke21@gmail.com" className="text-lg hover:text-yellow-500 transition-colors">
                                    ayushghodke21@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-zinc-900 rounded-lg text-yellow-500">
                                <FaMapMarkerAlt size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-300">Location</h4>
                                <p className="text-lg text-gray-400">
                                    Pune, Maharashtra, India
                                </p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-800 mt-8 relative z-10">
                            <h4 className="font-bold text-gray-300 mb-4 text-center">Follow Me</h4>
                            <div className="flex gap-4 justify-center">
                                <a href="https://www.youtube.com/@Techinair" target="_blank" rel="noopener noreferrer" className="p-4 bg-zinc-900 rounded-full hover:bg-red-600 transition-colors relative z-20">
                                    <FaYoutube size={24} />
                                </a>
                                <a href="https://www.instagram.com/tech_in_air_/" target="_blank" rel="noopener noreferrer" className="p-4 bg-zinc-900 rounded-full hover:bg-pink-600 transition-colors relative z-20">
                                    <FaInstagram size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
