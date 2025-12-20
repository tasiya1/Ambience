import { useState } from "react"
import RecipeBlock from "./RecipeBlock"
import type { Recipe } from "../../types"


function CookingTimer() {

    const recipes: Recipe[] = [
        {
            id: 1,
            title: "Mashed potatoes",
            description: "traditional ukrainian dish",
            ingredients: [
                {t: "onion", amt: "3 pcs"},
                {t: "garlic", amt: "2 pcs"},
                {t: "potato", amt: "300 g"}
            ],
            steps: [
                {desc: "Take potatoes", timer: 0},
                {desc: "Pre-fry onion", timer: 10},
                {desc: "Add garlic", timer: 15},
                {desc: "Boil this whole bunch of products for 20 min", timer: 20}
            ],
            cookingTime: 20,
            thumbnailSrc: "https://www.allrecipes.com/thmb/8pkbFP258H24axyBlRbGtWS-Vnk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/24771-basic-mashed-potatoes-mfs318-ed832ab37551471cba0997410217d4c5.jpg"
        },
        {
            id: 2,
            title: "Borshch",
            description: "traditional ukrainian dish",
            ingredients: [
                {t: "onion", amt: "3 pcs"},
                {t: "beetroot", amt: "2 pcs"},
                {t: "potato", amt: "300 g"}
            ],
            steps: [
                {desc: "Take a beetroot", timer: 0},
                {desc: "Pre-fry onion", timer: 10},
                {desc: "Boil with...", timer: 15},
                {desc: "Boil this whole bunch of products for 20 min", timer: 20}
            ],
            cookingTime: 30,
            thumbnailSrc: "https://thelemonapron.com/wp-content/uploads/2023/12/borscht-1-scaled-e1703003735922.jpg"
        }
    ]

    const [openedRecipe, setOpenedRecipe] = useState<Recipe | null>(null)

    const closeRecipe = () => {
        setOpenedRecipe(null)
    }

    return (
        openedRecipe ? 
        <RecipeBlock recipe={openedRecipe} closeRecipe={() => setOpenedRecipe(null)}></RecipeBlock>:
        <div className="cooking-timer">
            <div className="cooking-grid">
                {recipes.map((r) => (
                    <div className="cooking-tile" key={r.id} onClick={() => {setOpenedRecipe(r)}}>
                        <img src={r.thumbnailSrc}></img>
                        <span>{r.title}</span>
                        <span>{r.cookingTime + " min"}</span>
                    </div>
                ))}
                <div className="cooking-tile" key={-1} onClick={() => {}}>
                    <img src="https://cdn-icons-png.freepik.com/256/15526/15526430.png?semt=ais_white_label"></img>
                        <span>Add recipe</span>
                </div>
            </div> 
        </div>
    )
}

export default CookingTimer