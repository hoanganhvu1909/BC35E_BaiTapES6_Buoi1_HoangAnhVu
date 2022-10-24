let arrColor = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar", "purple"];

let renderButtonString = () => {
    let content = '';
    for (let index = 0; index < arrColor.length; index++) {
        let color = arrColor[index];
        content += `
            <button style="background-color: ${color};" onclick="changeColor('${color}')">${color}</button>
        
        `;
    }
    document.getElementById('colorContainer').innerHTML = content;
}

window.changeColor = (color) => {
    let changeHouse = `
    <div id="house" class="house ${color}">
            <div class="house-base">
                <div class="house-base-detail"></div>
                <div class="house-door-wrapper">
                    <div class="house-door">
                        <div class="house-door-window"></div>
                        <div class="house-door-detail"></div>
                    </div>
                </div>
                <div class="house-window-wrapper">
                    <div class="house-window house-window-left"></div>
                    <div class="house-window house-window-right"></div>
                </div>
            </div>
            <div class="house-sandwich"></div>
            <div class="house-upper">
                <div class="house-upper-detail"></div>
                <div class="house-upper-shadow"></div>
                <div class="house-window"></div>
                <div class="house-window-wrapper">
                    <div class="house-window house-window-left"></div>
                    <div class="house-window house-window-right"></div>
                </div>
            </div>
            <div class="house-roof">
                <div class="house-roof-side house-roof-side-left"></div>
                <div class="house-roof-side house-roof-side-right"></div>
                <div class="house-roof-detail"></div>
            </div>
        </div>
    `;
    document.getElementById('house').innerHTML = changeHouse;
}

renderButtonString();