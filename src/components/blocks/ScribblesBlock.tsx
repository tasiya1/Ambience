import { useEffect, useRef, useState } from "react"
import { getRandomColor } from "./RandomColorBlock"

interface RandomEffect {
    penDown(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D) : void 
    penMove(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D, path: Point[]) : void
    penUp(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D) : void
}

class DefaultLine implements RandomEffect {
    penDown(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D): void {
        if (ctx){
            ctx.beginPath()
            ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        }
    }
    penMove(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D, _path: Point[]): void {
        if (ctx) {
            ctx.lineTo(e.nativeEvent.offsetX , e.nativeEvent.offsetY)
            ctx.stroke()
        }
    }
    penUp(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D): void {
        if (ctx) {
            ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        }
    }

}

class JiggleLine implements RandomEffect {
    penDown(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D): void {
        if (ctx){
            ctx.beginPath()
            ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        }
    }
    penMove(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D): void {
        if (ctx) {
            ctx.lineTo(e.nativeEvent.offsetX + (Math.random()*10-20), e.nativeEvent.offsetY + (Math.random()*10-20))
            ctx.stroke()
        }
    }
    penUp(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D): void {
        if (ctx) {
            ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        }
    }

}

class CrazyColorsLine implements RandomEffect {
    penDown(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D): void {
        if (ctx){
            ctx.beginPath()
            ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        }
    }
    penMove(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D): void {
        if (ctx) {
            ctx.lineTo(e.nativeEvent.offsetX , e.nativeEvent.offsetY)
            ctx.strokeStyle = getRandomColor()
            ctx.stroke()
        }
    }
    penUp(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D): void {
        if (ctx) {
            ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
            ctx.strokeStyle = document.documentElement.style.getPropertyValue("--font-color")
        }
    }

}

class BarCodeLine implements RandomEffect {
    penDown(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D): void {
        if (ctx){
            ctx.beginPath()
            ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        }
    }
    penMove(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D): void {
        if (ctx) {
            ctx.beginPath()
            ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY - 20)
            ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY + 20)
            ctx.lineWidth = Math.random() * 5
            ctx.fillText(Math.floor(Math.random()*9).toString(), e.nativeEvent.offsetX, e.nativeEvent.offsetY + 30)
            ctx.stroke()
        }
    }
    penUp(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D): void {
        if (ctx) {
            ctx.closePath()
        }
    }
}

class CurvicLine implements RandomEffect {
    penDown(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D): void {
        if (ctx){
            ctx.beginPath()
            ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        }
    }
    penMove(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D): void {
        if (ctx) {
            const x = e.nativeEvent.offsetX
            const y = e.nativeEvent.offsetY
            const cp1 = {x: x+20-Math.random()*40, y: y+20-Math.random()*40}
            const cp2 = {x: x+20-Math.random()*40, y: y+20-Math.random()*40}
            ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, x, y)
            ctx.stroke()
        }
    }
    penUp(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D): void {
        if (ctx) {
            ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        }
    }

}

class RoadMapLine implements RandomEffect {
    penDown(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D): void {
        if (ctx){
            ctx.beginPath()
            ctx.arc(e.nativeEvent.offsetX, e.nativeEvent.offsetY, 10, 0, Math.PI*2, false)
            ctx.fill()
            ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)

            ctx.setLineDash([10, 5])
        }
    }
    penMove(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D, path: Point[]): void {
        if (ctx) {
            ctx.lineTo(e.nativeEvent.offsetX , e.nativeEvent.offsetY)
            ctx.stroke()
        }
    }
    penUp(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D): void {
        if (ctx) {
            ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)

            ctx.moveTo(e.nativeEvent.offsetX-10, e.nativeEvent.offsetY-10)
            ctx.lineTo(e.nativeEvent.offsetX+10, e.nativeEvent.offsetY+10)

            ctx.moveTo(e.nativeEvent.offsetX+10, e.nativeEvent.offsetY-10)
            ctx.lineTo(e.nativeEvent.offsetX-10, e.nativeEvent.offsetY+10)
            ctx.stroke()

            ctx.setLineDash([])
        }
    }

}

class LassoLine implements RandomEffect {
    penDown(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D): void {
        if (ctx){
            ctx.beginPath()
            ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        }
    }
    penMove(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D): void {
        if (ctx) {
            ctx.lineTo(e.nativeEvent.offsetX , e.nativeEvent.offsetY)
            ctx.stroke()
        }
    }
    penUp(e: React.MouseEvent<HTMLCanvasElement>, ctx : CanvasRenderingContext2D): void {
        if (ctx) {
            ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
            ctx.fill()
        }
    }

}

const randomEffects = [
    new DefaultLine(),
    new JiggleLine(),
    new CrazyColorsLine(),
    new BarCodeLine(),
    new CurvicLine(),
    new LassoLine(),
    new RoadMapLine()
]

export type Point = { x: number, y: number }

function ScribblesBlock() {

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
    const [isDrawing, setIsDrawing] = useState<boolean>(false)
    const [randomEffect, setRandomEffect] = useState<RandomEffect | null>(randomEffects[randomEffects.length-1])
    const [path, setPath] = useState<Point[]>([])

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext("2d"); if (!ctx) return
        ctxRef.current = ctx
        ctx.lineWidth = 2
        ctx.lineCap = "butt"
        ctx.strokeStyle = document.documentElement.style.getPropertyValue("--font-color")
        ctx.fillStyle = document.documentElement.style.getPropertyValue("--font-color")
    }, [])

    const changeEffect = () => {
        const r = Math.floor(Math.random() * randomEffects.length)
        setRandomEffect(randomEffects[r])
    }

    const addPathPoint = (e: React.MouseEvent<HTMLCanvasElement>) => {
        setPath(prev => ([...prev, {x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY}]))
    }

    const penDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        changeEffect()
        randomEffect?.penDown(e, ctxRef.current as CanvasRenderingContext2D)
        setIsDrawing(true)
        
    }

    const penMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing) return
        randomEffect?.penMove(e, ctxRef.current as CanvasRenderingContext2D, path)
    }

    const penUp = (e: React.MouseEvent<HTMLCanvasElement>) => {
        randomEffect?.penUp(e, ctxRef.current as CanvasRenderingContext2D)
        setIsDrawing(false)
    }

    return (<div>
        <canvas ref={canvasRef} className="scribble-canvas" onMouseDown={penDown} onMouseMove={penMove} onMouseUp={penUp} onMouseLeave={penUp} width={2000} height={900}></canvas>
    </div>)


}

export default ScribblesBlock