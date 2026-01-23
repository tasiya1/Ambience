import WindowWrapper from "../src/components/WindowWrapper"
import PictureBlock from "../src/components/blocks/PictureBlock"
import TopMenu from "../src/components/TopMenu"
import { useEffect, useState } from 'react'
import '../src/App.css'
import WindowOptions, { type WindowType } from "../src/components/WindowOptions"
import ClockBlock from "../src/components/blocks/ClockBlock"
import NotesBlock from "../src/components/blocks/NotesBlock"
import EmptyBlock from "../src/components/blocks/EmptyBlock"
import SettingsWindow from "../src/components/SettingsWindow"
import FileMenu from "../src/components/FileMenu"
import ToDoListBlock from "../src/components/blocks/ToDoListBlock"
import ChibbiDibbey from "../src/components/blocks/ChibbiDibbey"
import { applyTheme, type ThemeName } from "../src/assets/Themes"
import RandomColorBlock from "../src/components/blocks/RandomColorBlock"
import IdeasGeneratorBlock from "../src/components/blocks/IdeasGeneratorBlock"
import RollDiceBlock from "../src/components/blocks/RollDiceBlock"
import PomodoroTimerBlock from "../src/components/blocks/PomodoroTimerBlock"
import FortuneCookieBlock from "../src/components/blocks/FortuneCookieBlock"
import ToiletPaperBlock from "../src/components/blocks/ToiletPaperBlock"
import YouTubeVideoBlock from "../src/components/blocks/YouTubeVideoBlock"
import EmbroiderySlideshowBlock from "../src/components/blocks/EmbroiderySlideshowBlock"
import CookingTimer from "../src/components/blocks/CookingTimer"
import OftenUsedLinks from "../src/components/blocks/OftenUsedLinksWindow"
import ScribblesBlock from "../src/components/blocks/ScribblesBlock"
import ClickerBlock from "../src/components/blocks/ClickerBlock"
import RoadmapBlock from "../src/components/blocks/RoadmapBlock"
import FillGameBlock from "../src/components/blocks/FillGameBlock"
import { useDispatch, useSelector } from "react-redux"
import { addWindow, removeWindow, type WindowItem } from "../src/store/windowsSlice"
import type { RootState } from "../src/store/store"

export function setWindowLayout(windows: WindowItem[]){
    const windowLayout: WindowItem[] = JSON.parse(JSON.stringify(windows))
    const l: number = windowLayout.length
    switch (l) {

        case 1:
            Object.assign(windowLayout[0], { colStart: 1, colSpan: 8, rowStart: 1, rowSpan: 7 });
            break;

        case 2:
            Object.assign(windowLayout[0], { colStart: 1, colSpan: 4, rowStart: 1, rowSpan: 7 });
            Object.assign(windowLayout[1], { colStart: 5, colSpan: 4, rowStart: 1, rowSpan: 7 });
            break;

        case 3:
            Object.assign(windowLayout[0], { colStart: 1, colSpan: 4, rowStart: 1, rowSpan: 7 });
            Object.assign(windowLayout[1], { colStart: 5, colSpan: 4, rowStart: 1, rowSpan: 3 });
            Object.assign(windowLayout[2], { colStart: 5, colSpan: 4, rowStart: 4, rowSpan: 4 });
            break;

        case 4:
            Object.assign(windowLayout[0], { colStart: 1, colSpan: 4, rowStart: 1, rowSpan: 7 });
            Object.assign(windowLayout[1], { colStart: 5, colSpan: 4, rowStart: 1, rowSpan: 3 });
            Object.assign(windowLayout[2], { colStart: 5, colSpan: 2, rowStart: 4, rowSpan: 4 });
            Object.assign(windowLayout[3], { colStart: 7, colSpan: 2, rowStart: 4, rowSpan: 4 });
            break;

        case 5:
            Object.assign(windowLayout[0], { colStart: 1, colSpan: 4, rowStart: 1, rowSpan: 7 });
            Object.assign(windowLayout[1], { colStart: 5, colSpan: 4, rowStart: 1, rowSpan: 3 });
            Object.assign(windowLayout[2], { colStart: 5, colSpan: 2, rowStart: 4, rowSpan: 4 });
            Object.assign(windowLayout[3], { colStart: 7, colSpan: 2, rowStart: 4, rowSpan: 2 });
            Object.assign(windowLayout[4], { colStart: 7, colSpan: 2, rowStart: 6, rowSpan: 2 });
            break;

        case 6: 
            Object.assign(windowLayout[0], { colStart: 1, colSpan: 4, rowStart: 1, rowSpan: 7 });
            Object.assign(windowLayout[1], { colStart: 5, colSpan: 4, rowStart: 1, rowSpan: 3 });
            Object.assign(windowLayout[2], { colStart: 5, colSpan: 2, rowStart: 4, rowSpan: 4 });
            Object.assign(windowLayout[3], { colStart: 7, colSpan: 2, rowStart: 4, rowSpan: 2 });
            Object.assign(windowLayout[4], { colStart: 7, colSpan: 1, rowStart: 6, rowSpan: 2 });
            Object.assign(windowLayout[5], { colStart: 8, colSpan: 1, rowStart: 6, rowSpan: 2 });
            break;

        default:
            // Поки не ставити
    }
    return windowLayout
}

function AmbiancePage(){
    var workspaceWidth:number = window.innerWidth
    var workspaceHeight:number = window.innerHeight - 30
    console.log(workspaceWidth + " " + workspaceHeight)

    useEffect(() => {
        const saved : ThemeName = (localStorage.getItem("theme") || "lilac") as ThemeName;
        applyTheme(saved);
    }, []);

    const [visibleMenu, setVisibleMenu] = useState<string|null>(null);


    const switchMenuVisibility = (menuId: string) => {
        setVisibleMenu((prev) => (prev === menuId ? null : menuId))
    }

    const windows = useSelector((state: RootState) => state.windows)
    const dispatch = useDispatch()

    const deleteWindow = (id: string) => {
        dispatch(removeWindow(id))
    }

    const addNewWindow = (type: WindowType) => {
        if (windows.some(w => w.type === "clock" && type === "clock")) {
            return
        }

        dispatch(addWindow({
            type,
            title: type.toLocaleLowerCase(),
            src: "",
            colStart: 1,
            colSpan: 8,
            rowStart: 1,
            rowSpan: 7
        }))

        switchMenuVisibility("add-window")
    } 

    return (
        <div className="app">
            <TopMenu switchMenuVisibility={switchMenuVisibility}/>
            {visibleMenu === "add-window" && <WindowOptions onAddWindow={addNewWindow}/>}
            {visibleMenu === "settings" && <SettingsWindow/>}
            {visibleMenu === "file-menu" && <FileMenu/>}
            <div className="windows-container">
                {
                    windows.map((w) => (
                        <WindowWrapper key={w.id} id={w.id} title={w.type} colStart={w.colStart} colSpan={w.colSpan} rowStart={w.rowStart} rowSpan={w.rowSpan} onDelete={() => {deleteWindow(w.id)}}>

                            {w.type === "picture" && <PictureBlock/>}
                            {w.type === "notes" && <NotesBlock/>}
                            {w.type === "clock" && <ClockBlock key={w.id}/>}    
                            {w.type === "todo-list" && <ToDoListBlock/>}
                            {w.type === "empty" && <EmptyBlock/>}
                            {w.type === "chibbidibbey" && <ChibbiDibbey/>}
                            {w.type === "random-color" && <RandomColorBlock/>}
                            {w.type === "random-idea" && <IdeasGeneratorBlock/>}
                            {w.type === "roll-dice" && <RollDiceBlock/>}
                            {w.type === "pomodoro-timer" && <PomodoroTimerBlock/>}
                            {w.type === "fortune-cookie" && <FortuneCookieBlock/>}
                            {w.type === "toilet-paper" && <ToiletPaperBlock/>}
                            {w.type === "youtube-video" && <YouTubeVideoBlock/>}
                            {w.type === "embroidery-slideshow" && <EmbroiderySlideshowBlock/>}
                            {w.type === "cooking-recipe" && <CookingTimer/>}
                            {w.type === "often-used-links" && <OftenUsedLinks/>}
                            {w.type === "scribbles" && <ScribblesBlock isRandomEffect={true}/>}
                            {w.type === "clicker" && <ClickerBlock/>}
                            {w.type === "doodle" && <ScribblesBlock isRandomEffect={false}/>}
                            {w.type === "roadmap" && <RoadmapBlock/>}
                            {w.type === "fill-game" && <FillGameBlock/>}
                        </WindowWrapper>
                    ))
                }
            </div>
        </div>
    )
}

export default AmbiancePage