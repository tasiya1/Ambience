import { useState } from "react"

function ToDoItem () {

    const [isChecked, setIsChecked] = useState(false)
    const toggleCheckbox = () => {
        setIsChecked(checkMark => !checkMark)
    }

    return (
        <div className= "todo-item">
            <div className="checkbox" onClick={toggleCheckbox}>{isChecked && "✓"}</div>
            <div className={`todo-content ${isChecked? "checked" : ""}`} contentEditable="plaintext-only"></div>
        </div>
    )

}

export default ToDoItem