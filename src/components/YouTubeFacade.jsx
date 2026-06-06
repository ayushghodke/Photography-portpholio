import { useState } from 'react'
import { FaPlay } from './icons'

const YouTubeFacade = ({ id, title, className = '' }) => {
    const [active, setActive] = useState(false)

    if (active) {
        return (
            <iframe
                className={className}
                src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        )
    }

    return (
        <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`Play ${title}`}
            className={`${className} group p-0 border-0 cursor-pointer bg-black overflow-hidden`}
        >
            <img
                src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                srcSet={`https://i.ytimg.com/vi/${id}/hqdefault.jpg 480w, https://i.ytimg.com/vi/${id}/sddefault.jpg 640w, https://i.ytimg.com/vi/${id}/maxresdefault.jpg 1280w`}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt={title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                <span className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600/90 group-hover:bg-red-600 transition-colors shadow-2xl">
                    <FaPlay className="text-white text-xl md:text-2xl ml-1" />
                </span>
            </span>
        </button>
    )
}

export default YouTubeFacade
