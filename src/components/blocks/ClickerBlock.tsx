import { useState } from "react"

function ClickerBlock() {

    const [clicks, setClicks] = useState<number>(0)
    const addClick = () => {
        setClicks(prev => (prev + 1))
    }

    return (<div className="clicker-block">
        <button className="clicker-button" onClick={addClick}>click</button>
        <span className="clicks-count">{clicks}</span>
    </div>)
}

export default ClickerBlock