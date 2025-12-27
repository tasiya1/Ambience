import { useEffect, useRef, useState } from "react"
import { getRandomColor } from "./RandomColorBlock"

interface RandomEffect {
    penDown({p, ctx} : DrawContext) : void 
    penMove({p, ctx} : DrawContext) : void
    penUp({p, ctx} : DrawContext) : void
}

interface DrawContext {
    ctx: CanvasRenderingContext2D,
    p: Point
    //,path: Point[]
}

abstract class BaseLine implements RandomEffect {
    title: string
    constructor() { this.title = "" }
    penDown({p, ctx} : DrawContext): void {
        if (ctx){
            ctx.save()
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
        }
    }
    
    penUp({p, ctx} : DrawContext): void {
        if (ctx) {
            ctx.lineTo(p.x, p.y)
            ctx.restore()
        }
    }    
    
    abstract penMove({p, ctx} : DrawContext): void
}

class DefaultLine extends BaseLine {
    constructor () { super(); this.title = "Default line" }
    
    penMove({p, ctx} : DrawContext): void {
        if (ctx) {
            ctx.lineTo(p.x, p.y)
            ctx.stroke()
        }
    }

}

class JiggleLine extends BaseLine {
    constructor () { super(); this.title = "Jiggle Line" }
    
    penMove({p, ctx} : DrawContext): void {
        if (ctx) {
            ctx.lineTo(p.x + 10 - (Math.random()*20), p.y + 10 - (Math.random()*20))
            ctx.stroke()
        }
    }

}

class CrazyColorsLine extends BaseLine {
    constructor () { super(); this.title = "Crazy Colors" }
    
    penMove({p, ctx} : DrawContext): void {
        if (ctx) {
            ctx.lineTo(p.x, p.y)
            ctx.strokeStyle = getRandomColor()
            ctx.stroke()
        }
    }
    penUp({p, ctx} : DrawContext): void {
        if (ctx) {
            ctx.lineTo(p.x, p.y)
            ctx.strokeStyle = document.documentElement.style.getPropertyValue("--font-color")
        }
    }

}

class BarCodeLine extends BaseLine {
    constructor () { super(); this.title = "Bar Code Line" }
    
    penMove({p, ctx} : DrawContext): void {
        if (ctx) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y - 20)
            ctx.lineTo(p.x, p.y + 20)
            ctx.lineWidth = Math.random() * 5
            ctx.fillText(Math.floor(Math.random()*9).toString(), p.x, p.y + 30)
            ctx.stroke()
        }
    }
    penUp({p, ctx} : DrawContext): void {
        if (ctx) {
            ctx.closePath()
            ctx.restore()
        }
    }
}

class CurvyLine extends BaseLine {
    constructor () { super(); this.title = "Curvy Line" }
    
    penMove({p, ctx} : DrawContext): void {
        if (ctx) {
            const x = p.x
            const y = p.y
            const cp1 = {x: x+20-Math.random()*40, y: y+20-Math.random()*40}
            const cp2 = {x: x+20-Math.random()*40, y: y+20-Math.random()*40}
            ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, x, y)
            ctx.stroke()
        }
    }

}

class RoadMapLine extends BaseLine {
    constructor () { super(); this.title = "Roadmap Line" }
    penDown({p, ctx} : DrawContext): void {
        if (ctx){
            ctx.lineWidth = 3
            ctx.beginPath()
            ctx.arc(p.x, p.y, 10, 0, Math.PI*2, false)
            ctx.fill()
            ctx.stroke()
            ctx.moveTo(p.x, p.y)

            ctx.setLineDash([10, 5])
        }
    }
    penMove({p, ctx} : DrawContext): void {
        if (ctx) {
            ctx.lineTo(p.x, p.y)
            ctx.stroke()
        }
    }
    penUp({p, ctx} : DrawContext): void {
        const off = 10
        if (ctx) {
            ctx.lineTo(p.x, p.y)
            ctx.closePath()
            ctx.setLineDash([])
            ctx.beginPath()
            ctx.moveTo(p.x-off, p.y-off)
            ctx.lineTo(p.x+off, p.y+off)

            ctx.moveTo(p.x+off, p.y-off)
            ctx.lineTo(p.x-off, p.y+off)
            ctx.stroke()
            ctx.lineWidth = 2
        }
    }

}

class LassoLine extends BaseLine {
    constructor () { super(); this.title = "Lasso" }
    
    penMove({p, ctx} : DrawContext): void {
        if (ctx) {
            ctx.lineTo(p.x, p.y)
            ctx.stroke()
        }
    }
    penUp({p, ctx} : DrawContext): void {
        if (ctx) {
            ctx.lineTo(p.x, p.y)
            ctx.fill()
        }
    }

}

const randomEffects = [
    new DefaultLine(),
    new JiggleLine(),
    new CrazyColorsLine(),
    new BarCodeLine(),
    new CurvyLine(),
    new LassoLine(),
    new RoadMapLine()
]

export type Point = { x: number, y: number }

interface ScribblesBlockProps {
    isRandomEffect: boolean
}

function ScribblesBlock({ isRandomEffect } : ScribblesBlockProps) {

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const pathRef = useRef<Point[]>([])

    const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
    const [isDrawing, setIsDrawing] = useState<boolean>(false)
    const [randomEffect, setRandomEffect] = useState<BaseLine | null>(randomEffects[0])

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext("2d"); if (!ctx) return
        ctxRef.current = ctx
        ctx.lineWidth = 2
        ctx.lineCap = "butt"
        ctx.strokeStyle = document.documentElement.style.getPropertyValue("--font-color")
        ctx.fillStyle = document.documentElement.style.getPropertyValue("--font-color")
    }, [])

    const changeEffect = (e: React.MouseEvent<HTMLCanvasElement>, ctx: CanvasRenderingContext2D) => {
        const effect = randomEffects[Math.floor(Math.random() * randomEffects.length)]
        setRandomEffect(effect)
        const dctx : DrawContext = {
            ctx: ctx,
            p: {x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY}
        }
        effect.penDown(dctx)
    }

    const addPathPoint = (e: React.MouseEvent<HTMLCanvasElement>) => {
        //pathRef.current.push({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY})
    }

    const penDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (isRandomEffect) changeEffect(e, ctxRef.current as CanvasRenderingContext2D)
            ctxRef.current?.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        setIsDrawing(true)
    }

    const penMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing) return
        randomEffect?.penMove({
            ctx: ctxRef.current, 
            p: {x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY}} as DrawContext)
    }

    const penUp = (e: React.MouseEvent<HTMLCanvasElement>) => {
        randomEffect?.penUp({
            ctx: ctxRef.current, 
            p: {x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY}} as DrawContext)
        setIsDrawing(false)
    }

    const finishDrawing = () => {
        setIsDrawing(false)
        ctxRef.current?.closePath()
    }

    return (<div>
        <p style={{float: "right"}}>current effect - {randomEffect?.title}</p>
        <canvas ref={canvasRef} className="scribble-canvas" onMouseDown={penDown} onMouseMove={penMove} onMouseUp={penUp} onMouseLeave={finishDrawing} width={2000} height={900}></canvas>
    </div>)


}

export default ScribblesBlock