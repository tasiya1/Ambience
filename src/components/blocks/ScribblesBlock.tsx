import { useEffect, useRef, useState } from "react"

function ScribblesBlock() {

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
    const [isDrawing, setIsDrawing] = useState<boolean>(false)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext("2d"); if (!ctx) return
        ctxRef.current = ctx
        ctx.lineWidth = 2
        ctx.lineCap = "butt"
        ctx.strokeStyle = document.documentElement.style.getPropertyValue("--font-color")
    }, [])

    const penDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const ctx = ctxRef.current
        if (ctx){
            ctx.beginPath()
            ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
            setIsDrawing(true)
        }
    }

    const penMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing) return
        const ctx = ctxRef.current
        if (ctx) {
            ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
            ctx.stroke()
        }
    }

    const penUp = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const ctx = ctxRef.current
        if (ctx) {ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
        setIsDrawing(false)
    }

    return (<div>
        <canvas ref={canvasRef} className="scribble-canvas" onMouseDown={penDown} onMouseMove={penMove} onMouseUp={penUp} onMouseLeave={penUp} width={2000} height={900}></canvas>
    </div>)


}

export default ScribblesBlock