

function CookingTimer() {
    const cookingTime = [
        {title: "pasta", cookingTime: 9, thumbnailSrc: "https://cdn-icons-png.flaticon.com/512/5787/5787180.png"},
        {title: "rice", cookingTime: 18, thumbnailSrc: "https://cdn-icons-png.flaticon.com/512/1531/1531385.png"},
        {title: "potatoes", cookingTime: 25, thumbnailSrc: "https://cdn-icons-png.flaticon.com/512/2255/2255556.png"},
        {title: "black tea", cookingTime: 1, thumbnailSrc: "https://cdn-icons-png.flaticon.com/512/3504/3504837.png"}
    ]

    

    return (<div className="cooking-timer">
        Choose a meal
        <div className="cooking-grid">
            {Object.entries(cookingTime).map((e) => (
                <div className="cooking-tile"><img src={e[1].thumbnailSrc}></img><span>{e[1].title}</span><span>{e[1].cookingTime + " min"}</span></div>
            ))}
        </div>
    </div>)
}

export default CookingTimer