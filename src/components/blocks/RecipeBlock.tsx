import type { Recipe } from "../../types"

interface RecipeBlockProps {
    recipe: Recipe
    closeRecipe: () => void
}

function RecipeBlock ({recipe, closeRecipe} : RecipeBlockProps) {
    return (<div className="recipe-block">
        <button className="back-button" onClick={closeRecipe}>❮</button>
        <h2 className="recipe-title">{recipe.title}</h2>
        <p className="recipe-description">{recipe.description}</p>
        <div className="recipe-ingredients">
            <h3>Ingredients</h3>
            {recipe.ingredients.map((i, id) => <div className="recipe-ingredient" key={id}>
                <span>{i.t}: </span><span>{i.amt}</span>
            </div>)}
            <h3>Preparement</h3>
            <ol className="recipe-steps">
                {recipe.steps.map((s, id) => 
                <li key={id}>
                    <span>{s.desc}</span>
                    {s.timer > 0 && <><button className="recipe-step-timer">▶︎</button>
                    <span>{s.timer} min</span></>}
                    
                </li>)}
            </ol>
            <img src={recipe.thumbnailSrc} className="recipe-picture"></img>
        </div>
    </div>)
}

export default RecipeBlock