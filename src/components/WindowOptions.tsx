type WindowOptionsProps = {
    onAddWindow: (type: WindowType) => void
}

export type WindowType = "picture" | "notes"| "clock" | "todo-list" | "empty" | "chibbidibbey" | "random-color" | "random-idea" | "roll-dice" | "toilet-paper" | "fortune-cookie" | "pomodoro-timer" | "youtube-video" | "embroidery-slideshow" | "cooking-timer" | "often-used-links" | "scribbles" | "clicker" | "doodle" | "roadmap"

function WindowOptions ({onAddWindow} : WindowOptionsProps){
    return (
        <div className="window-options">
            <span className="window-header" style={{backgroundColor: "white"}}>
                Select type of content
                <button className="small-close-button">x</button>
            </span>
            <h3>Utilities</h3>
            <div className="options-grid">
                <button className="window-type-button" onClick={() => onAddWindow("picture")}>Picture</button>
                <button className="window-type-button" onClick={() => onAddWindow("notes")}>Notes</button>
                <button className="window-type-button" onClick={() => onAddWindow("clock")} >Clock</button>
                <button className="window-type-button" onClick={() => onAddWindow("todo-list")}>To-do list</button>
                <button className="window-type-button" onClick={() => onAddWindow("roadmap")}>Roadmap list</button>
                <button className="window-type-button" onClick={() => onAddWindow("often-used-links")}>Your URL Shortcuts</button>
                <button className="window-type-button" onClick={() => onAddWindow("pomodoro-timer")}>Pomodoro timer</button>
                <button className="window-type-button" onClick={() => onAddWindow("doodle")}>Doodle</button>
                <button className="window-type-button" onClick={() => onAddWindow("empty")}>Empty</button>
                <button className="window-type-button" onClick={() => onAddWindow("cooking-timer")}>Cooking Timer</button>
            </div>
            
            <hr></hr>
            <h3>Playful</h3>
            <div className="options-grid">
                <button className="window-type-button" onClick={() => onAddWindow("chibbidibbey")}>ChibbiDibbey</button>
                <button className="window-type-button" onClick={() => onAddWindow("clicker")}>Clicker</button>
                <button className="window-type-button" onClick={() => onAddWindow("scribbles")}>Scribbles</button>
                <button className="window-type-button" onClick={() => onAddWindow("toilet-paper")}>Toilet paper roll</button>
                <button className="window-type-button" onClick={() => onAddWindow("roll-dice")}>Roll a dice</button>
                <button className="window-type-button" onClick={() => onAddWindow("fortune-cookie")}>Fortune cookie</button>
            </div>

            <hr></hr>
            <h3>Creativity</h3>
            <div className="options-grid">
                <button className="window-type-button" onClick={() => onAddWindow("random-color")}>Random color</button>
                <button className="window-type-button" onClick={() => onAddWindow("random-idea")}>Random idea</button>
                <button className="window-type-button" onClick={() => onAddWindow("embroidery-slideshow")}>Ukainian Embroidery</button>
            </div>
            
        </div>
    )
}

export default WindowOptions