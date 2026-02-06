import { useState, type ChangeEvent } from "react"
import { applyTheme, themes } from "../../assets/Themes"

function ThemesTab() {


    // SETTINGS
    const [gap, setGap] = useState<boolean>(false)
    const [borders, setBorders] = useState<boolean>(true)
    const [headerSize, setHeaderSize] = useState<number>(51)
    const [cornerRoundness, setCornerRoundness] = useState<number>(0)

    const setNewGap = (e: ChangeEvent<HTMLInputElement>) => {
        const val = Boolean(e.target.checked)
        setGap(val)
        document.documentElement.style.setProperty("--windows-gap", val ? "5px" : "0px")
    }

    const setNewBorders = (e: ChangeEvent<HTMLInputElement>) => {
        const val = Boolean(e.target.checked)
        setBorders(val)
        document.documentElement.style.setProperty("--border", (val ? "2px solid black" : "none"))
        document.documentElement.style.setProperty("--inner-border", (val ? "1px solid black" : "none"))
    }

    const setNewHeaderSize = (e: ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value)
        setHeaderSize(val)
        document.documentElement.style.setProperty("--header-height", val + "px")
    }

    const setNewCornerRoundness = (e: ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value)
        setCornerRoundness(val)
        document.documentElement.style.setProperty("--content-border-radius", val + "px")
    }

    return (<>

        <h3>Adjust style</h3>
        <div style={{width: "100%", height: "fit-content", display: "grid", gridTemplateColumns: "1fr 1fr"}}>
            <div className="ui-style-options">
                <label htmlFor="gap-checkbox">Windows gap</label>
                <input id="gap-checkbox" type="checkbox" checked={gap} onChange={setNewGap}></input>
            </div>
            <div className="ui-style-options">
                <label htmlFor="borders-checkbox">Borders</label>
                <input id="borders-checkbox" type="checkbox" checked={borders} onChange={setNewBorders}></input>
            </div>
            <div className="ui-style-options">
                <label htmlFor="header-size-input">Header height</label>
                <input id="header-size-input" type="number" min={25} max={80} 
                value={headerSize} onChange={setNewHeaderSize}></input>
            </div>
            <div className="ui-style-options">
                <label htmlFor="corner-roundness-input">Corner roundness</label>
                <input id="corner-roundness-input" type="number" min={0} max={200} 
                value={cornerRoundness} onChange={setNewCornerRoundness}></input>
            </div>
        </div>
        

        <h3>Select theme</h3>
        <h4>Background themes</h4>
        <div className="themes-container">
            <div className="theme-button" onClick={() => {applyTheme("lilac")}} style={{backgroundImage: "url(https://i.pinimg.com/originals/bc/d7/48/bcd74849e39b7b5c0e43897a79d8fbe0.gif)"}}>Lilac(Default)</div>
            <div className="theme-button" onClick={() => {applyTheme("frutiger_aero")}} style={{backgroundImage: "url(https://images.steamusercontent.com/ugc/2304216839481601476/8AC055C92427A686CF04CB22A55AB6349ED57557/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)"}}>Frutiger Aero</div>
            <div className="theme-button" onClick={() => {applyTheme("cyberpunk")}} style={{backgroundImage: "url(https://images.steamusercontent.com/ugc/2438013375536940927/D370DBF7BFC83ED36F783F08A598FFF3E71A1D61/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)"}}>Cyberpunk</div>
            <div className="theme-button" onClick={() => {applyTheme("pastel")}} style={{backgroundImage: "url(https://i.pinimg.com/originals/db/8d/5b/db8d5bf6928701fbfb9c576163964f9c.gif)"}}>Pastel pink</div>
            <div className="theme-button" onClick={() => {applyTheme("forest")}} style={{backgroundImage: "url(https://i.pinimg.com/736x/ba/38/10/ba3810ba0829e2bdcc0c0bd218ac851a.jpg)"}}>Forest</div>

            <div className="theme-button" onClick={() => {applyTheme("typewriter")}} style={{backgroundImage: "url(https://www.theruglady.com.au/cdn/shop/files/SER-YURI-BEIGEPortrait.png?v=1688359878)"}}>Typewriter</div>
        </div>   

        <hr className="divider"></hr>
        <h4>Material themes</h4>
        <div className="themes-container">
            <div className="theme-button" onClick={() => {applyTheme("soft_white")}} style={{backgroundColor: "#fff", color: "#000", textShadow: "none"}}>Soft light</div>
            <div className="theme-button" onClick={() => {applyTheme("soft_black")}} style={{backgroundColor: "#000"}}>Soft dark</div>
        </div>

        <hr className="divider"></hr>
        <h4>Color themes</h4>
        <div className="themes-container">
            <div className="theme-button" onClick={() => {applyTheme("breeze")}} style={{backgroundColor: themes.breeze.mainColor, color: themes.breeze.text, textShadow: "none"}}>Breeze</div>
            <div className="theme-button" onClick={() => {applyTheme("lime")}} style={{backgroundColor: themes.lime.mainColor, color: themes.lime.text, textShadow: "none"}}>Lime</div>
            <div className="theme-button" onClick={() => {applyTheme("cherry_varenyk")}} style={{backgroundColor: themes.cherry_varenyk.mainColor, color: themes.cherry_varenyk.text, textShadow: "none"}}>Cherry Varenyk</div>
        </div>
        
    </>)
}

export default ThemesTab