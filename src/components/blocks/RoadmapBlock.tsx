import { useState } from "react"

type RoadmapItemType = {
    checked: boolean
    title: string
}

type RoadmapItemProps = {
    content: RoadmapItemType,
    index: number,
    onCheck: (index: number) => void
}

function RoadmapItem({ content, index, onCheck } : RoadmapItemProps) {

    return <div className="roadmap-item" key={index}>
        <div style={{height: "100%", width: "30px"}}>
            <div className={`roadmap-pin ${content.checked? "r-pin-checked":""}`} onClick={() => {onCheck(index)}}></div>
            <div className="roadmap-connect-line"></div>
        </div>
            
            <div className="roadmap-pin-title" contentEditable="plaintext-only"></div>
            
        </div>
}

function RoadmapBlock() {

    const [roadmapItems, setRoadmapItems] = useState<RoadmapItemType[]>([
        { title: "push commit", checked: false },
        { title: "take a nap", checked: false },
        { title: "call jessica", checked: false },
        { title: "take a nap", checked: false },
    ])

    const addRoadmapItem = () => {
        setRoadmapItems(prev => ([...prev, {checked: false,  title: ""}]))
    }

    const checkItem = (index: number) => {
        setRoadmapItems(prev => {
            const c = prev[index]
            if (!c.checked) {
                if (index > 0 && !prev[index - 1].checked) 
                    return prev
            } else if (c.checked) {
                if (index < prev.length - 1 && prev[index + 1].checked)
                    return prev
            }

            return (prev.map((item, i) => 
                i === index ? {...item, checked: !item.checked} : item
            ))
        })
    }

    return <div className="roadmap-block">
        {
            roadmapItems.map((r, index) => (
                <RoadmapItem key={index} content={r} index={index} onCheck={checkItem}/>
            ))
            
        }
        <div className="add-roadmap-pin-button" onClick={addRoadmapItem}>Add new pin 📍</div>
    </div>
}

export default RoadmapBlock