import { useEffect, useRef, useState } from "react"

type Point = {
    x: number
    y: number
}

type GameStage = | "menu" | "playing" | "result"

type GameFigures = {
    x: number
    y: number
    w: number
    h: number
    type: string
}

type FillGameLevel = {
    level: number
    title: string
    figures: GameFigures[]
    penSize: number
    figColor: number[]
    penColor: number[]
}
/*
function pointOnCircle(cX : number, 
    cY : number, 
    radius : number, 
    i : number, 
    ncuts : number) {
    const n_cuts_angle = (360/ncuts)*i
    return {
        x: cX + Math.cos(n_cuts_angle*i*2)*radius, 
        y: cY + Math.sin(n_cuts_angle*i*2)*radius
    }
}
*/
function FillGameBlock () {

const levels : FillGameLevel[] = [
    {level: 1,  title: "Big Star", figures: [
        {x: 430, y: 350, w: 600, h: 50, type: "star"}
    ], penSize: 100, figColor: [240,230,140], penColor: [107,142,35]},
    {level: 2,  title: "H", figures: [
        {x: 70, y: 100, w: 200, h: 500, type: "rect"},
        {x: 200, y: 250, w: 500, h: 200, type: "rect"},
        {x: 600, y: 100, w: 200, h: 500, type: "rect"},
    ], penSize: 70, figColor: [192, 219, 39], penColor: [227, 133, 9]},
    {level: 3,  title: "Galaxy", figures: [
        {x: 100, y: 500, w: 50, h: 50, type: "star"},
        {x: 200, y: 200, w: 50, h: 50, type: "star"},
        {x: 300, y: 200, w: 50, h: 50, type: "star"},
        {x: 500, y: 100, w: 50, h: 50, type: "star"},
        {x: 400, y: 500, w: 50, h: 50, type: "star"},
        {x: 500, y: 100, w: 50, h: 50, type: "star"},
        {x: 600, y: 550, w: 300, h: 50, type: "circle"}
    ], penSize: 30, figColor: [255, 255, 43], penColor: [25, 13, 61]},
    
    {level: 4,  title: "What", figures: [
        {x: 100, y: 200, w: 200, h: 50, type: "rect"},
        {x: 200, y: 400, w: 200, h: 50, type: "star"},
        {x: 500, y: 100, w: 200, h: 50, type: "star"},
        {x: 400, y: 550, w: 200, h: 50, type: "circle"}
    ], penSize: 30, figColor: [50, 114, 168], penColor: [150, 236, 255]}, 
    
    {level: 5,  title: "Dice", figures: [
        {x: 200, y: 200, w: 120, h: 50, type: "circle"},
        {x: 200, y: 500, w: 120, h: 50, type: "circle"},
        {x: 650, y: 200, w: 120, h: 50, type: "circle"},
        {x: 650, y: 500, w: 120, h: 50, type: "circle"}
    ], penSize: 100, figColor: [44, 44, 46], penColor: [242, 242, 245]},
    {level: 6,  title: "Stars 1", figures: [
        {x: 150, y: 150, w: 50, h: 50, type: "star"},
        {x: 350, y: 200, w: 50, h: 50, type: "star"},
        {x: 550, y: 150, w: 50, h: 50, type: "star"},
        {x: 250, y: 400, w: 50, h: 50, type: "star"},
        {x: 450, y: 350, w: 50, h: 50, type: "star"},
        {x: 650, y: 450, w: 50, h: 50, type: "star"},
        {x: 100, y: 600, w: 50, h: 50, type: "star"},
        {x: 60, y: 450, w: 50, h: 50, type: "star"},
        {x: 300, y: 450, w: 50, h: 50, type: "star"},
        {x: 450, y: 600, w: 50, h: 50, type: "star"},
        {x: 450, y: 70, w: 50, h: 50, type: "star"},
        {x: 700, y: 300, w: 50, h: 50, type: "star"},
        {x: 700, y: 100, w: 50, h: 50, type: "star"},
        {x: 650, y: 600, w: 50, h: 50, type: "star"}
    ], penSize: 25, figColor: [240,128,128], penColor: [255,228,225]},
    {level: 7,  title: "Star in a Box", figures: [
        {x: 100, y: 100, w: 650, h: 50, type: "rect"},
        {x: 100, y: 100, w: 50, h: 400, type: "rect"},
        {x: 730, y: 100, w: 50, h: 450, type: "rect"},
        {x: 100, y: 500, w: 650, h: 50, type: "rect"},
        {x: 430, y: 350, w: 100, h: 50, type: "star"},
    ], penSize: 50, figColor: [240,255,240], penColor: [70,130,180]},
    {level: 8,  title: "Stars 2", figures: [
        {x: 100, y: 100, w:50, h:50, type: "star"},
        {x: 255, y: 100, w:50, h:50, type: "star"},
        {x: 410, y: 100, w:50, h:50, type: "star"},
        {x: 565, y: 100, w:50, h:50, type: "star"},
        {x: 720, y: 100, w:50, h:50, type: "star"},

        {x: 100, y: 212, w:50, h:50, type: "star"},
        {x: 255, y: 212, w:50, h:50, type: "star"},
        {x: 410, y: 212, w:50, h:50, type: "star"},
        {x: 565, y: 212, w:50, h:50, type: "star"},
        {x: 720, y: 212, w:50, h:50, type: "star"},

        {x: 100, y: 324, w:50, h:50, type: "star"},
        {x: 255, y: 324, w:50, h:50, type: "star"},
        {x: 410, y: 324, w:50, h:50, type: "star"},
        {x: 565, y: 324, w:50, h:50, type: "star"},
        {x: 720, y: 324, w:50, h:50, type: "star"},

        {x: 100, y: 436, w:50, h:50, type: "star"},
        {x: 255, y: 436, w:50, h:50, type: "star"},
        {x: 410, y: 436, w:50, h:50, type: "star"},
        {x: 565, y: 436, w:50, h:50, type: "star"},
        {x: 720, y: 436, w:50, h:50, type: "star"},

        {x: 100, y: 548, w:50, h:50, type: "star"},
        {x: 255, y: 548, w:50, h:50, type: "star"},
        {x: 410, y: 548, w:50, h:50, type: "star"},
        {x: 565, y: 548, w:50, h:50, type: "star"},
        {x: 720, y: 548, w:50, h:50, type: "star"},


    ], penSize: 10, figColor: [0,0,0], penColor: [186,85,211]}
]
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
    const canvasContainerRef = useRef<HTMLDivElement | null>(null)

    const [damagePercent, setDamagePercent] = useState<number>(0.0)
    const [fillPercent, setFillPercent] = useState<number>(0.0)
    const [successScore, setSuccessScore] = useState<number>(0.0)
    
    const [isDrawing, setIsDrawing] = useState<boolean>(false)
    const [progress, setProgress] = useState<number>(0)
    const [gamePhase, setGamePhase] = useState<GameStage>("menu")

    useEffect(() => {
        const canvas = canvasRef.current
        const container = canvasContainerRef.current
        if (!canvas || !container) return

        const rect = container.getBoundingClientRect()

        canvas.width = rect.width
        canvas.height = rect.height

        const ctx = canvas?.getContext("2d", {willReadFrequently: true}); if (!ctx) return
        ctxRef.current = ctx
        ctx.lineWidth = 2
        ctx.lineCap = "round"
        ctx.lineJoin = "round"
        ctx.imageSmoothingEnabled = false
        ctx.strokeStyle = document.documentElement.style.getPropertyValue("--font-color")
        ctx.fillStyle = document.documentElement.style.getPropertyValue("--font-color")
        //drawCurrentLevel()
    }, [])

    const drawCurrentLevel = () => {
        if (!ctxRef.current) return 
        const c = levels[progress].figColor
        ctxRef.current.fillStyle = `rgb(${c[0]}, ${c[1]}, ${c[2]})`
        const pc = levels[progress].penColor
        ctxRef.current.strokeStyle = `rgb(${pc[0]}, ${pc[1]}, ${pc[2]})`
        ctxRef.current.lineWidth = levels[progress].penSize

        levels[progress].figures.forEach((f)=> {
            ctxRef.current?.beginPath()
            switch (f.type) {
                case "rect":
                    ctxRef.current?.fillRect(f.x, f.y, f.w, f.h)
                break;

                case "star": 
                    
                    const maxA = Math.PI * 2
                    const starCuts = 5
                    const outerRadius = f.w / 2
                    const innerRadius = outerRadius * 0.5
                    const step = maxA / (starCuts * 2)
                    let angle = -maxA / 2

                    let p : Point = {x: 0, y: 0}
                    
                    for (let i = 0; i < starCuts * 2; i++) {
                        
                        const r = (i % 2 === 0) ? outerRadius : innerRadius
                        p.x = f.x + Math.cos(angle) * r
                        p.y = f.y + Math.sin(angle) * r
                        
                        if (i == 0) {
                            ctxRef.current?.moveTo(p.x, p.y)
                        } else {
                            ctxRef.current?.lineTo(p.x, p.y)
                        }
                        angle += step
                    }
                    ctxRef.current?.closePath()
                    ctxRef.current?.fill()
                break;

                case "circle":
                    ctxRef.current?.arc(f.x, f.y, f.w, 0, Math.PI*2, false)
                ctxRef.current?.fill()
                break;

                default:
                break;
            }
        })
    }

    const penDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        ctxRef.current?.beginPath()
        ctxRef.current?.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        setIsDrawing(true)
    }

    const penMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing) return
        ctxRef.current?.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        ctxRef.current?.stroke()
    }

    const penUp = (e: React.MouseEvent<HTMLCanvasElement>) => {
        ctxRef.current?.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        ctxRef.current?.stroke()
        setIsDrawing(false)
    }

    const finishDrawing = () => {
        setIsDrawing(false)
        ctxRef.current?.closePath()
    }

    const finishLevel = () => {
        calculateScore()
        setGamePhase("result")
    }

    useEffect(() => {
        if (gamePhase === "playing") {
            clearCanvas()
            drawCurrentLevel()
            preCalculateGameField()
        } else if (gamePhase === "menu") {
            clearCanvas()
        }
        
    }, [progress, gamePhase])

    const clearCanvas = () => {ctxRef.current?.clearRect(0,0,canvasRef.current? canvasRef.current?.width:0, canvasRef.current? canvasRef.current?.height:0)}

    const startLevel = (levelIndex: number) => {
        setProgress(levelIndex)
        setGamePhase("playing")
    }

    const goToNextLevel = () => {
        if (progress === levels.length-1) return
        setProgress(prev => (prev+1))
        setGamePhase("playing")
    }

    const preCalculateGameField = () => {
        const [, figures, empty] = calculateCanvas()
        setFillPercent(empty)
        setDamagePercent(figures)
    }

    const calculateCanvas = () : number[] => {
        if (!canvasRef.current || !ctxRef.current) return [0, 0, 0] //КОСТИЛЬ
        const l = levels[progress]
        const imageData = ctxRef.current.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height)
        const pixels = imageData.data
        let player = 0
        let figures = 0
        let empty = 0
        let whole = pixels.length
        for (let i = 0; i < whole; i+=4) {
            const [r, g, b, a] = pixels.slice(i, i + 4)

            if (a === 0) empty++
            if (r === l.figColor[0] && g === l.figColor[1] && b === l.figColor[2]) figures++
            else if (r === l.penColor[0] && g === l.penColor[1] && b === l.penColor[2]) player++
        }
        return [player, figures, empty]
    }

    const calculateScore = () => {
        const [player, figures, ] = calculateCanvas()
        const calculatedFill = player / fillPercent
        const calculatedDamage = 1 - figures / damagePercent
        const calculatedSuccess = calculatedFill * (figures / damagePercent)
        setFillPercent(Math.floor(calculatedFill * 100)) // ділю поточний філ на філ перед грою
        setDamagePercent(Math.floor(calculatedDamage * 100)) // те саме з дамагом - ділю поточну на площу фігур перед грою
        setSuccessScore(Math.floor(calculatedSuccess * 100))
    }

    return (<>
        <div style={{display:"flex", alignItems: "center", justifyContent: "space-between", padding: "2px 10px"}}>
            {gamePhase === "playing" && (<>
                <h3>Level {levels[progress].level}</h3>
                <p>Fill as most area as possible, avoiding figures!</p>
                <button onClick={finishLevel}>Check</button>
                </>)}
            {gamePhase === "result" && (<>
                <h3>Fill score: {fillPercent}%</h3>
                <h3>Damage score: {damagePercent}%</h3>
                <h3>Success score: {successScore}%</h3>
                <button onClick={() => startLevel(progress)}>↺</button>
                {(progress < levels.length - 1) ? <>
                    <button onClick={goToNextLevel}>Next</button>
                    <button onClick={() => setGamePhase("menu")}>Menu</button>
                    </>:
                    <button onClick={() => {setGamePhase("menu")}}>Back to menu</button>
                }
            </>)}
        </div>
        {gamePhase === "menu" && (
            <div className="fill-game-menu">
                {levels.map((l, index) => (<div className="fill-game-menu-level-button"
                style={{color: `rgb(${l.figColor[0]}, ${l.figColor[1]}, ${l.figColor[2]})`,
                backgroundColor: `rgb(${l.penColor[0]}, ${l.penColor[1]}, ${l.penColor[2]})`}}
                onClick={() => {startLevel(index)}}>Level {l.level}<br/>{l.title}</div>))}
            </div>
        )}
        
        <div ref={canvasContainerRef} style={{width: "100%", height: "100%", visibility: (gamePhase !== "menu")?"visible":"hidden"}}>
            <canvas ref={canvasRef} className="scribble-canvas" onMouseDown={penDown} onMouseMove={penMove} onMouseUp={penUp} onMouseLeave={finishDrawing}></canvas>
        </div>
    </>)
}

export default FillGameBlock