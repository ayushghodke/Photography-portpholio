import { motion } from 'framer-motion'
import { FaCamera, FaPhotoVideo, FaFilm, FaArrowRight } from 'react-icons/fa'

const services = [
    {
        icon: <FaCamera />,
        title: 'Photography',
        description: 'Professional high-resolution photography for events, portraits, products, and landscapes.',
        href: '#stills'
    },
    {
        icon: <FaFilm />,
        title: 'Commercial Video',
        description: 'Engaging commercial content designed to elevate your brand and reach your audience.',
        href: '#content'
    },
    {
        icon: <FaPhotoVideo />,
        title: 'Video Editing',
        description: 'Expert post-production services including color grading, sound design, and cuts.',
        href: '#content'
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.a
                            key={index}
                            href={service.href}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-yellow-500/50 transition-colors group cursor-pointer block"
                        >
                            <div className="text-4xl text-gray-500 group-hover:text-yellow-500 transition-colors mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <div className="flex items-center gap-2 text-yellow-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                                <span>View Work</span>
                                <FaArrowRight size={12} />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services

