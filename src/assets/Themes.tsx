
export type ThemeName = keyof typeof themes;

/*
type Theme = {
        header: string, 
        mainColor: string,
        topBar: string,
        accent: string,
        notebookBg: string,
        todoBg: string,
        clockBg: string,
        text: string,
        topBarText: string
}
*/



type ThemeProperties = {
    mainColor: string;
    header: string;
    headerText: string;
    topBar: string;
    topBarText: string;
    accent: string;
    button: string;
    buttonPressed: string;
    text: string;
    notebookBg: string;
    todoBg: string;
    clockBg: string;
    globalBg: string;
    windowBg: string;
    chibbidibbeyGIF?: string;
};

export const themes : Record<string, ThemeProperties> = {
    lilac: {
        header: "#E5B7ED", 
        headerText: "#1f1f1f",
        mainColor: "#E5B7ED",
        topBar: "#1f1f1f",
        topBarText: "#efefef",
        accent: "#f1edac",
        notebookBg: "url(https://images.unsplash.com/photo-1629196914168-3a2652305f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlJTIwcGFwZXJ8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000)",
        todoBg: "url(https://i.pinimg.com/736x/24/ce/20/24ce20015e788d39c0006d219c9c4dbe.jpg)",
        clockBg: "url(https://cdn.wallpapersafari.com/37/96/thwpNs.png)",
        text: "#1f1f1f",
        globalBg: "url(https://images.unsplash.com/photo-1629196914168-3a2652305f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlJTIwcGFwZXJ8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000)",
        button: "#E5B7ED",
        buttonPressed: "#f1edac",
        windowBg: "#ece4d5",
        chibbidibbeyGIF: "url(https://64.media.tumblr.com/3f7ad0edea8bc95c5efd8e11fa75252f/55f2ba90c4a5fe8e-c9/s500x750/5c40ad8220a01bd3ab43c7ef67f4d3153b8cae5b.gif)"
    },
    frutiger_aero: {
        header: "#228dffff", 
        headerText: "#1f1f1f",
        mainColor: "#228dffff",
        topBar: "#b5f6ffff",
        topBarText: "#0016a3ff",
        accent: "#ff6f00ff",
        notebookBg: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDEzd77BSFDRNElD9f4yv9Iqcz8v6m0piMgfEcY7yKpI2dSC-C3ZLT1bZZl1qIQfqhKU&usqp=CAU)",
        todoBg: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Frutiger_Aero_%283%29.jpg/1200px-Frutiger_Aero_%283%29.jpg)",
        clockBg: "url(https://miro.medium.com/v2/resize:fit:1400/1*_zqJUXJaDneHRrXeXtR5vQ.webp)",
        text: "#1f1f1f",
        globalBg: "url(https://images.unsplash.com/photo-1629196914168-3a2652305f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlJTIwcGFwZXJ8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000)",
        button: "#228dffff",
        buttonPressed: "rgb(12, 119, 233)",
        windowBg: "rgb(181, 223, 255)",
        chibbidibbeyGIF: "url(https://media.tenor.com/RIZhO8NjO8sAAAAj/fish.gif)"
    },
    typewriter: {
        header: "#e7bea8ff", 
        headerText: "#161513ff",
        mainColor: "#e7bea8ff",
        topBar: "#33261fff",
        topBarText: "#fef4e2ff",
        accent: "#fcb83a",
        notebookBg: "url(https://www.shutterstock.com/image-vector/geometric-pattern-diamond-shape-on-260nw-2613685275.jpg)",
        todoBg: "url(https://images.orientbell.com/media/catalog/product/o/d/odh_diamond_beige_hl.png)",
        clockBg: "url(https://images.unsplash.com/photo-1530819568329-97653eafbbfa?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8)",
        text: "#161513ff",
        globalBg: "url(https://images.unsplash.com/photo-1629196914168-3a2652305f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlJTIwcGFwZXJ8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000)",
        button: "#fcb83a",
        buttonPressed: "#e0970f",
        windowBg: "#efefef",
        chibbidibbeyGIF: "url(https://media.tenor.com/3idD6oxHpcAAAAAj/%E9%BC%A0.gif)"
    },
    pastel: {
        header: "#ffb5b5ff", 
        headerText: "#161314ff",
        mainColor: "#ffb5b5ff",
        topBar: "#f6f2f1ff",
        topBarText: "#d03d46ff",
        accent: "#ef6381ff",
        notebookBg: "url(https://i.pinimg.com/736x/81/24/d6/8124d6aea68abf42820a0eae0102f9fd.jpg)",
        todoBg: "url(https://static.vecteezy.com/system/resources/previews/005/269/515/non_2x/love-heart-pattern-pink-pastel-seamless-background-free-vector.jpg)",
        clockBg: "url(https://images.squarespace-cdn.com/content/v1/65ce335afc22cf681a065426/0b1abd69-ee62-416d-82a6-645981a1cf43/The+Self-Love+Bootcamp.png)",
        text: "#161314ff",
        globalBg: "url(https://images.unsplash.com/photo-1629196914168-3a2652305f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlJTIwcGFwZXJ8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000)",
        button: "#ef6381ff",
        buttonPressed: "#d9516e",
        windowBg: "#efefef",
        chibbidibbeyGIF: "url(https://i.pinimg.com/originals/80/7b/5c/807b5c4b02e765bb4930b7c66662ef4b.gif)"
    },
    cyberpunk: {
        header: "#1c1327ff", 
        headerText: "#a5eaffff",
        mainColor: "#1c1327ff",
        topBar: "#202020ff",
        topBarText: "#cff9ffff",
        accent: "#820fdbff",
        notebookBg: "url(https://i.ytimg.com/vi/e1ynOu30S7A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBOOWPwuLf3p7bHm0u_Emx319q1Tg)",
        todoBg: "url(https://img.freepik.com/premium-vector/futuristic-abstract-technology-cyberpunk-wallpaper_636138-1939.jpg)",
        clockBg: "url(https://wallpapers.com/images/hd/cyberpunk-pixel-art-0wsff2qqmw168u7t.jpg)",
        text: "#a5eaffff",
        globalBg: "url(https://images.unsplash.com/photo-1629196914168-3a2652305f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlJTIwcGFwZXJ8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000)",
        button: "#7307c6",
        buttonPressed: "#530292",
        windowBg: "#1c1327ff",
        chibbidibbeyGIF: "url(https://playableconcepts.aalto.fi/wp-content/uploads/2020/11/Pixel_Robot.gif)"
    },
    forest: {
        header: "#c9d7d0ff", 
        headerText: "#091c14ff",
        mainColor: "#c9d7d0ff",
        topBar: "#1e2221ff",
        topBarText: "#c0f8eaff",
        accent: "#992913",
        notebookBg: "url(https://garden.spoonflower.com/c/9160006/p/f/m/niSo-qhJ0r5QOfoJW2nf0pt4eVcEKO_LnBKeJQMZ01jNkCh1-dxbEg/Couched%20Diamond%20-%20Stonewashed%20-%20Small%20-%20Cream%20Light%20Aqua.jpg)",
        todoBg: "url(https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D)",
        clockBg: "url(https://cdn.shopify.com/s/files/1/0565/7080/6458/files/foggy-forest-wallpaper-mural-plain.jpg?v=1632987442)",
        text: "#091c14ff",
        globalBg: "url(https://images.unsplash.com/photo-1629196914168-3a2652305f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlJTIwcGFwZXJ8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000)",
        button: "#c9d7d0ff",
        buttonPressed: "#96c4b5",
        windowBg: "#efefef",
        chibbidibbeyGIF: "url(https://i.pinimg.com/originals/65/27/1a/65271a8375b1ee87d0eb2511911ca3d9.gif)"
    },
    soft_white: {
        header: "#fff", 
        headerText: "#091c14ff",
        mainColor: "#fff",
        topBar: "#e2e2e2ff",
        topBarText: "#181818ff",
        accent: "#71e0ffff",
        notebookBg: "linear-gradient(180deg,rgba(250, 250, 250, 1) 0%, rgba(255, 255, 255, 1) 100%)",
        todoBg: "url(https://i.pinimg.com/736x/f5/a2/44/f5a24493c5efc5d3c8fdcb3a3531cc15.jpg)",
        clockBg: "url(https://images.unsplash.com/photo-1600172454284-934feca24ccd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGUlMjBhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D)",
        text: "#091c14ff",
        globalBg: "url(https://images.unsplash.com/photo-1629196914168-3a2652305f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlJTIwcGFwZXJ8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000)",
        button: "#71e0ffff",
        buttonPressed: "#68c6e0",
        windowBg: "#efefef"
    },
    soft_black: {
        header: "#232323ff", 
        headerText: "#dbdbdbff",
        mainColor: "#232323ff",
        topBar: "#0e0e0eff",
        topBarText: "#dbdbdbff",
        accent: "#8e7de1ff",
        notebookBg: "linear-gradient(180deg, #191919ff 0%, #1f1f1fff 100%)",
        todoBg: "url(https://nighteye.app/wp-content/uploads/2020/04/claudio-testa-fb_CZ4hZXWo-unsplash.jpg)",
        clockBg: "url(https://nighteye.app/wp-content/uploads/2020/04/claudio-testa-fb_CZ4hZXWo-unsplash.jpg)",
        text: "#ebebebff",
        globalBg: "url(https://images.unsplash.com/photo-1629196914168-3a2652305f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlJTIwcGFwZXJ8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000)",
        button: "#1d1d1d",
        buttonPressed: "#181818",
        windowBg: "linear-gradient(180deg, #191919ff 0%, #1f1f1fff 100%)"
    },
    breeze: {
        header: "#a6fcffff", 
        headerText: "#1f1f1f",
        mainColor: "#a6fcffff",
        topBar: "#2c2419ff",
        topBarText: "#fffcf7ff",
        accent: "#ffd500ff",
        notebookBg: "url(https://amyraparque.com/wp-content/uploads/2020/09/shadow.jpg)",
        todoBg: "url(https://media.istockphoto.com/id/642063312/photo/sea-sand-and-summer-day-background-summer-time-wallpaper.jpg?s=170667a&w=0&k=20&c=f_CJNfY8mEjzT6g9b1cyW2PJLyT_RM0s8YKcB23jD7M=)",
        clockBg: "url(https://i.pinimg.com/originals/d6/e6/1f/d6e61f5863b7fb496fe116b8dc395565.jpg)",
        text: "#2c2419ff",
        globalBg: "url(https://images.unsplash.com/photo-1629196914168-3a2652305f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlJTIwcGFwZXJ8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000)",
        button: "#a6fcffff",
        buttonPressed: "#8fe7ea",
        windowBg: "#fcffe8ff",
        chibbidibbeyGIF: "url(https://i.pinimg.com/originals/a5/8b/e3/a58be376b75944f0a6163a51c38505e7.gif)"
    },
    lime: {
        header: "#e7ffb0ff", 
        headerText: "#4625eeff",
        mainColor: "#e7ffb0ff",
        topBar: "#0d1b25ff",
        topBarText: "#fcffe8ff",
        accent: "#4625eeff",
        notebookBg: "linear-gradient(180deg, #edffdbff 0%, #f9ffe5ff 100%)",
        todoBg: "#fcffe8ff",
        clockBg: "url(https://museumqualityart.com/cdn/shop/files/LemonsInCeramicBowl_JamesZamora_20x16_MuseumQualityArt_WebRes_400x.jpg?v=1765120701)",
        text: "#211e2aff",
        globalBg: "url(https://images.unsplash.com/photo-1629196914168-3a2652305f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlJTIwcGFwZXJ8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000)",
        button: "#cdeca9",
        buttonPressed: "#b9dc90",
        windowBg: "#fcffe8ff",
        chibbidibbeyGIF: "url(https://i.redd.it/fx90pbl0ntc91.png)"
    },
    cherry_varenyk: {
        header: "#ee2543ff", 
        headerText: "#fffbfb",
        mainColor: "#fffbfb",
        topBar: "#250d0fff",
        topBarText: "#fcffe8ff",
        accent: "#319228",
        notebookBg: "#fcffe8ff",
        todoBg: "#fcffe8ff",
        clockBg: "url(https://i.pinimg.com/1200x/92/19/04/92190468ef8091e5bafbcc62b8ef95b3.jpg)",
        text: "#81121dff",
        globalBg: "url(https://images.unsplash.com/photo-1629196914168-3a2652305f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlJTIwcGFwZXJ8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000)",
        button: "#fcffe8ff",
        buttonPressed: "#319228",
        windowBg: "#fcffe8ff",
        chibbidibbeyGIF: "url(https://i.pinimg.com/originals/4d/2a/bf/4d2abf55797133026d1b8583fddc66d4.gif)"
    }
}

function buildThemeInCSS(t: ThemeProperties) {
    return {
        "--window-header-color": t.header,
        "--window-header-text-color": t.headerText,
        "--theme-color": t.mainColor,
        "--top-bar-color": t.topBar,
        "--top-bar-text-color": t.topBarText,
        "--accent-color": t.accent,
        "--notebook-bg": t.notebookBg,
        "--todo-bg": t.todoBg,
        "--clock-bg": t.clockBg,
        "--text-color": t.text,
        "--global-bg": t.globalBg,
        "--button-color": t.button,
        "--button-pressed-color": t.buttonPressed,
        "--window-bg": t.windowBg,
        "--chibbidibbey-appearance": t.chibbidibbeyGIF ?? "url(https://i.pinimg.com/originals/21/db/d3/21dbd346a371c5bceffd6d61e491c3b0.gif)",

        // constants
        /* "--windows-gap": "0px",
        "--border": "2px solid black",
        "--inner-border": "1px solid black",
        "--content-border-radius": "0px",
        "--box-shadow": "none" */
    }
}

export function applyTheme(themeName: ThemeName) {
  const themeProperties = themes[themeName];
  if (!themeProperties) return;

  const theme = buildThemeInCSS(themeProperties)

  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });

  localStorage.setItem("theme", themeName);
}
