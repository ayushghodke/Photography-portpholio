import { motion } from 'framer-motion'

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
    const baseStyles = 'px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none'

    const variants = {
        primary: 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-lg shadow-yellow-500/20',
        secondary: 'bg-transparent border border-white text-white hover:bg-white hover:text-black',
        outline: 'border border-gray-600 text-gray-300 hover:border-white hover:text-white'
    }

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.button>
    )
}

export default Button
