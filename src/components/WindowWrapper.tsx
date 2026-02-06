interface WindowWrapperProps {
    id: string
    title: string
    colStart: number
    colSpan: number
    rowStart: number
    rowSpan: number
    onDelete: (id: string) => void
    children?: React.ReactNode  
}

export function NoWindowsMessage() {
    return (<div className="no-window-message">
        <span>No active windows. Click + to add window</span>
    </div>)
}

function WindowWrapper ({id,    title, colStart, colSpan, rowStart, rowSpan, onDelete , children} : WindowWrapperProps) {
  return (
    <div className="window" style={{gridColumn: `${colStart} / span ${colSpan}`, gridRow: `${rowStart} / span ${rowSpan}`}}>
        <div className="window-header">
            <span className="window-title">{title}</span>
            <div className="window-close" onClick={() => onDelete(id)}>x</div>
        </div>
        <div className="window-content">{children}</div>
    </div>
  )
}

export default WindowWrapper