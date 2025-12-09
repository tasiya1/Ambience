import { useEffect, useState } from "react"

function EmbroiderySlideshowBlock () {

    const embroideryTextures = [
        "https://i.pinimg.com/1200x/7e/1d/8b/7e1d8bf3f2acd999cd60ea16e2c08c2c.jpg",
        "https://i.pinimg.com/736x/7d/0a/27/7d0a272795d2950f1782270c502538a8.jpg",
        "https://i.pinimg.com/1200x/83/30/6f/83306f579acd70a78b78237b0d8dd86c.jpg",
        "https://i.pinimg.com/1200x/16/97/a3/1697a3cfbe1164c35ff0256ae2233360.jpg",
        "https://i.pinimg.com/1200x/9b/51/f0/9b51f0541c62ec36f90914765ed2d0ca.jpg",
        "https://i.pinimg.com/1200x/12/8b/37/128b379b873f075a3f28c50195477965.jpg",
        "https://i.pinimg.com/736x/14/be/fb/14befbc09b5e3d99eb5ebf7e20e0a2af.jpg"
    ]

    const [embIndex, setEmbIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            
            setEmbIndex(prevIndex => {
                const nextIndex = (prevIndex + 1) % embroideryTextures.length
                document.documentElement.style.setProperty("--embroidery", `url(${embroideryTextures[nextIndex]})`)
                return nextIndex
            })
        }, 2857);

        return () => clearInterval(interval)
    }, [])

    return (<div className="embroidery-window"></div>) 
}

export default EmbroiderySlideshowBlock