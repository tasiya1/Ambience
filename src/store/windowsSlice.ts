import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { setWindowLayout } from "../../pages/AmbiancePage";

//type windowType = "picture" | "notes"| "clock" | "todo-list" | "empty" | "chibbidibbey" | "random-color" | "random-idea" | "roll-dice" | "toilet-paper" | "fortune-cookie" | "pomodoro-timer" | "youtube-video" | "embroidery-slideshow" | "cooking-recipe" | "often-used-links" | "scribbles" | "clicker" | "doodle" | "roadmap" | "fill-game"

export type WindowItem = {
    id: string,
    type: string,
    title: string,
    src: string,
    colStart: number,
    colSpan: number,
    rowStart: number,
    rowSpan: number
}

const initialState : WindowItem[] =  [{
        id: "1",
        type: "todo-list",
        title: `todo-list`,
        src: "",
        colStart: 1,
        colSpan: 4,
        rowStart: 1,
        rowSpan: 7
    },
    {
        id: "2",
        type: "clock",
        title: `clock`,
        src: "",
        colStart: 5,
        colSpan: 4,
        rowStart: 1,
        rowSpan: 3
    },
    {
        id: "3",
        type: "notes",
        title: `notes`,
        src: "",
        colStart: 5,
        colSpan: 2,
        rowStart: 4,
        rowSpan: 4
    },
    {
        id: "4",
        type: "roadmap",
        title: `roadmap`,
        src: "",
        colStart: 7,
        colSpan: 2,
        rowStart: 4,
        rowSpan: 4
    },
]

const windowsSlice = createSlice({
    name: "windows",
    initialState,
    reducers: {
        addWindow: (state, action: PayloadAction<Omit<WindowItem, "id">>) => {

            if (state.length >= 6) return

            const newWindow = {
                ...action.payload, id: crypto.randomUUID()
            }

            const updated = [...state, newWindow]

            return setWindowLayout(updated)
        },
        removeWindow: (state, action: PayloadAction<string>) => {
            const updated = state.filter(w => w.id != action.payload)
            return setWindowLayout(updated)
        }
    }
})


export const {addWindow, removeWindow} = windowsSlice.actions
export default windowsSlice.reducer