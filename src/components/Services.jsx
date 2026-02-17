import { motion } from 'framer-motion'
import { FaCamera, FaVideo, FaPhotoVideo, FaFilm } from 'react-icons/fa'

const services = [
    {
        icon: <FaCamera />,
        title: 'Photography',
        description: 'Professional high-resolution photography for events, portraits, products, and landscapes.'
    },
    {
        icon: <FaVideo />,
        title: 'Videography',
        description: 'Cinematic video production that captures the essence of your story with dynamic visuals.'
    },
    {
        icon: <FaFilm />,
        title: 'Commercial Video',
        description: 'Engaging commercial content designed to elevate your brand and reach your audience.'
    },
    {
        icon: <FaPhotoVideo />,
        title: 'Video Editing',
        description: 'Expert post-production services including color grading, sound design, and cuts.'
    }
]

const Services = () => {
    return (
        <section id="motion" className="py-20 bg-zinc-900 text-white">
            <div className="container mx-auto px-6">
                <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-yellow-500 font-bold uppercase tracking-widest text-sm text-center mb-2"
                >
                    My Expertise
                </motion.h4>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold uppercase text-center mb-16"
                >
                    Services
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-yellow-500/50 transition-colors group"
                        >
                            <div className="text-4xl text-gray-500 group-hover:text-yellow-500 transition-colors mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
