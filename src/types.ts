
export type Ingredient = {
    t: string, 
    amt: string
}

export type Step = {
    desc: string, 
    timer: number
}

export type Recipe = {
    id: number
    title: string,
    description: string,
    ingredients: Ingredient[],
    steps: Step[],
    thumbnailSrc: string,
    cookingTime: number
}