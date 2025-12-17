import { useState } from "react"

type Link = {
    title: string,
    url: string
}

function OftenUsedLinks() {

    const [links, setLinks] = useState<Link[]>([{title: "Pinterest", url: "https://www.pinterest.com/"}])
    const [writingLinkMode, setWritingLinkMode] = useState<boolean>(false)
    const [linkInput, setLinkInput] = useState<string>("")
    const [linkTitleInput, setLinkTitleInput] = useState<string>("")

    const addLink = () => {
        if (linkInput == "") return
        setLinks([...links, {title: linkTitleInput, url: linkInput}])
        setWritingLinkMode(false)
        setLinkInput("")
        setLinkTitleInput("")
    }

    const writeLink = () => {
        setWritingLinkMode(true)
    }

    return (
        <div className="links-window">
            {links?.map((u) => (
                <a className="url-shortcut" href={u.url} target="_blank">
                    {u.title || u.url}
                </a>))}
            
            {writingLinkMode ? <div className="url-shortcut enter-url-mode">
                <div>
                    <input placeholder="Shortcut name" required={false} name="shortcutTitle" value={linkTitleInput} onChange={(e) => {setLinkTitleInput(e.target.value)}}></input>
                    <input placeholder="URL" type="url" required={true} name="shortcutUrl" value={linkInput} onChange={(e) => {setLinkInput(e.target.value)}}></input>
                </div>
                <button className="save-url-button" onClick={addLink}>+</button>              
            </div> : <div className="url-shortcut" onClick={() => writeLink()}>+ Add link</div>}
        </div>
    )
}

export default OftenUsedLinks