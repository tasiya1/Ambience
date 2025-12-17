import { applyTheme, themes } from "../../assets/Themes"

function ThemesTab() {
    return (<>
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
            <div className="theme-button" onClick={() => {applyTheme("soft_white")}} style={{backgroundColor: "#fff"}}>Soft light</div>
            <div className="theme-button" onClick={() => {applyTheme("soft_black")}} style={{backgroundColor: "#000"}}>Soft dark</div>
        </div>

        <hr className="divider"></hr>
        <h4>Color themes</h4>
        <div className="themes-container">
            <div className="theme-button" onClick={() => {applyTheme("breeze")}} style={{backgroundColor: themes.breeze["--main-theme-color"], color: themes.breeze["--font-color"], textShadow: "none"}}>Breeze</div>
            <div className="theme-button" onClick={() => {applyTheme("lime")}} style={{backgroundColor: themes.lime["--main-theme-color"], color: themes.lime["--font-color"], textShadow: "none"}}>Lime</div>
            <div className="theme-button" onClick={() => {applyTheme("cherry_varenyk")}} style={{backgroundColor: themes.cherry_varenyk["--main-theme-color"], color: themes.cherry_varenyk["--font-color"], textShadow: "none"}}>Cherry Varenyk</div>
        </div>
        
    </>)
}

export default ThemesTab