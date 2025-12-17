import { useState } from "react"

export class Achievement {
    title : string;
    description : string
    icon : string
    unlocked : boolean = false
    progress? : number
    constructor(title: string, description: string, icon: string) {
        this.title = title
        this.description = description
        this.icon = icon
    }
}

const achievements_set = [
    new Achievement("All-Nighter", "Complete pomodoro cycle at night", "https://static.vecteezy.com/system/resources/previews/022/224/031/non_2x/cute-cat-sitting-on-a-moon-with-stars-free-png.png"),
    new Achievement("Bad Luck", "Roll 3 low numbers in a row", "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/ultimate-regular-free/entertainment-events-hobbies/entertainment-events-hobbies/dice-bm782zok7r6twx0c1uvq4s.png?_a=DATAg1AAZAA0"),
    new Achievement("Productivity Monster", "Complete 10 tasks in one day", "https://static.thenounproject.com/png/729750-200.png"),
    new Achievement("Experienced", "Discover all windows", "https://icon-library.com/images/experience-icon-png/experience-icon-png-12.jpg"),
    new Achievement("Apocalypse Survivor", "Get 5 toilet paper rolls at the same time", "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/toilet_paper.png"),
    new Achievement("Night Creature", "Open any window at night", "https://www.pngmart.com/files/3/Halloween-Bat-PNG-Pic.png"),
    new Achievement("Morning Bird", "Open any window in the morning", "https://images.scalebranding.com/morning-bird-logo-56540ba6-3c7e-4d12-b12c-a8fdb336723a.jpg"),
    new Achievement("First Steps", "Open first window", "https://lh5.googleusercontent.com/proxy/bcUO5je6XjAIYjbqC8SIrHD7Q1vpalUgzj_raDcuYo3oA1iE1X-k0JT6zD4di2HCpe6QUMhN-MXdvp0XBMPcWKzXE9X-qvXOQcQ-dxKDpc1m8FYV6FWQ"),
    new Achievement("What Am I Doing", "Close window within 5 seconds of opening", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPxgZZ3pNoB3GD86s9I7r1lyXkS_8q7kr1w&s"),
    new Achievement("Procrastination Final Boss", "Stop Pomodoro timer 5 times before completion", "https://static.thenounproject.com/png/489525-200.png"),
    new Achievement("Lucky Bastard", "Roll max number 3 times in a row", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9FIqFWFou7DAWgLjlnIBhtsoaKqUYXwjEQ&s"),
    new Achievement("Philosopher", "Write note more than 300 symbols long", "https://cdn-icons-png.flaticon.com/512/5238/5238429.png"),
    new Achievement("Give Me Microscope", "Set picture with low resolution", "https://img.freepik.com/premium-vector/pixel-censored-icon_97886-21849.jpg?semt=ais_se_enriched&w=740&q=80"),
    new Achievement("Full HD", "Set picture with high resolution", "https://png.pngtree.com/png-clipart/20220827/ourmid/pngtree-camera-dslr-ilustration-png-image_6125620.png"),
    new Achievement("Professional Grandma", "Take good care of ChibbiDibbey", "https://static.vecteezy.com/system/resources/previews/046/912/362/non_2x/grandmother-flat-icon-design-free-vector.jpg")
]

function ProfileTab() {

    const [user, setUser] = useState({
        name: "Tasiya"
    })
    const [achievements, setAchievements] = useState(achievements_set)

    return (<div className="profile-tab">
        <h3>Profile</h3>
        <div className="settings-tab-section profile-info">
            
            <div style={{maxWidth: "70%"}}>
                <h3>{user.name}</h3>
                <p>I like to make jewellry cats. Jojo nerd. I like to make jewellry cats. Jojo nerd</p>
            </div>
            <img className="user-profile-picture" src="https://i.pinimg.com/736x/75/88/85/758885eb9cdbeeb41b7241fa6fdcc3b8.jpg"></img>
        </div>
        <h3>Achievements</h3>
        <div className="settings-tab-section">
            
            <div className="achievements-section">
                {achievements.map((a) => (
                    <div className="achievement-item" title={a.description}>
                        <img src={a.icon}></img>
                        <p>{a.title}</p>
                    </div>
                ))}

            </div>
        </div>



    </div>)
}

export default ProfileTab