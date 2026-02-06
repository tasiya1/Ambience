import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"

function ScreensTab() {
    const windows = useSelector((state : RootState) => state.windows)
    return (<>
        <h3>My Screens</h3>
        <div className="screen-item">
            <div className="mini-screen-preview">
                {windows.map((w) => <div className="mini-window-preview" style={{gridColumnStart: w.colStart, gridColumnEnd: w.colStart + w.colSpan, gridRowStart: w.rowStart, gridRowEnd: w.rowStart + w.rowSpan}}></div>)}
            </div>
            <h4>Current</h4>
        </div>
        
    </>)
}

export default ScreensTab