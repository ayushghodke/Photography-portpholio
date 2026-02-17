import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaCamera } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Motion', href: '#motion' },
        { name: 'Stills', href: '#stills' },
        { name: 'About', href: '#about' },
    ]

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-white uppercase">
                    <FaCamera className="text-yellow-500" />
                    <span>Ayush<span className="text-yellow-500">Ghodke</span></span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white uppercase tracking-widest transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <Button variant="primary" className="!py-2 !px-6 text-sm uppercase tracking-wide">
                        Hire Me
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-gray-800 p-6 md:hidden flex flex-col gap-6 items-center"
                    >
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-300 hover:text-yellow-500 uppercase tracking-widest">
                                {link.name}
                            </a>
                        ))}
                        <Button variant="primary" className="w-full text-center" onClick={() => setIsOpen(false)}>
                            Hire Me
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
