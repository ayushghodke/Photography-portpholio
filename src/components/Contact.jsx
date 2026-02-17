import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaInstagram } from 'react-icons/fa'
import Button from './Button'

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold mb-6">Contact Details</h3>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-black rounded-lg text-yellow-500">
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
                            <div className="p-3 bg-black rounded-lg text-yellow-500">
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
                            <div className="p-3 bg-black rounded-lg text-yellow-500">
                                <FaMapMarkerAlt size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-300">Location</h4>
                                <p className="text-lg text-gray-400">
                                    Pune, Maharashtra, India
                                </p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-bold text-gray-300 mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                <a href="https://www.youtube.com/@Techinair" target="_blank" rel="noopener noreferrer" className="p-4 bg-black rounded-full hover:bg-red-600 transition-colors">
                                    <FaYoutube size={24} />
                                </a>
                                <a href="https://www.instagram.com/tech_in_air_" target="_blank" rel="noopener noreferrer" className="p-4 bg-black rounded-full hover:bg-pink-600 transition-colors">
                                    <FaInstagram size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>
                        <Button variant="primary" className="w-full">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
