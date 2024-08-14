const container = document.querySelector(".grid-container");
const buttonColor = document.querySelector(".color-buttons");
const buttonRGB = document.querySelector(".color-button-rgb");
const button16px = document.querySelector(".button-16px");
const button32px = document.querySelector(".button-32px");
const button64px = document.querySelector(".button-64px");
const button100px = document.querySelector(".button-100px");
const buttonReset = document.querySelector(".reset-button");
const getColor = document.querySelector(".input-color");
const buttonOpacity = document.querySelector(".opacity-button");
const buttonOpacity1 = document.querySelector(".opacity1-button");
const buttonOpacity2 = document.querySelector(".opacity2-button");
//---------BUTTONS---------------->
var grid_rightnow = 16;
var grid_color = false;
var opactiy_level = 0;
//---------GRID---------------->
const DEFAULT_GRID = () => {
    for (i = 1;i <= 16*16;++i) {
        const sq = document.createElement("div");
        sq.setAttribute("class", `sq-pixel-16 sq-pixel-16-${i}`);
        container.append(sq);
    }
};
const grid_16px = () => {
    for (i = 1;i <= grid_rightnow*grid_rightnow;++i) {
        container.firstElementChild.remove();
    }
    for (i = 1;i <= 16*16;++i) {
        const sq = document.createElement("div");
        sq.setAttribute("class", `sq-pixel-16 sq-pixel-16-${i}`);
        container.append(sq);
    }
    grid_rightnow = 16;
};
const grid_32px = () => {
    for (i = 1;i <= grid_rightnow*grid_rightnow;++i) {
        container.firstElementChild.remove();
    }
    for (i = 1;i <= 32*32;++i) {
        const sq = document.createElement("div");
        sq.setAttribute("class", `sq-pixel-32 sq-pixel-32-${i}`);
        container.append(sq);
    }
    grid_rightnow = 32;
};
const grid_64px = () => {
    for (i = 1;i <= grid_rightnow*grid_rightnow;++i) {
        container.firstElementChild.remove();
    }
    for (i = 1;i <= 64*64;++i) {
        const sq = document.createElement("div");
        sq.setAttribute("class", `sq-pixel-64 sq-pixel-64-${i}`);
        container.append(sq);
    }
    grid_rightnow = 64;
};
const grid_100px = () => {
    for (i = 1;i <= grid_rightnow*grid_rightnow;++i) {
        container.firstElementChild.remove();
    }
    for (i = 1;i <= 100*100;++i) {
        const sq = document.createElement("div");
        sq.setAttribute("class", `sq-pixel-100 sq-pixel-100-${i}`);
        container.append(sq);
    }
    grid_rightnow = 100;
};
DEFAULT_GRID();
//---------GRID---------------->

const selectColor = () => {
    grid_color = false;  
    buttonColor.setAttribute("class", "button-selected");
    buttonRGB.removeAttribute("class", "button-selected");
};
const selectRGB = () => {
    grid_color = true;
    buttonRGB.setAttribute("class", "button-selected");
    buttonColor.removeAttribute("class", "button-selected");
};
const color_square = (e) => {
    if (!grid_color) {
        let square = e.target;
        let available = square.getAttribute("class");
        if (available !== "grid-container") {
            let color_value = getColor.value;
            square.style.backgroundColor = color_value;
            if (opactiy_level === 0) {
                if (square.style.opacity === "0.1") {
                    square.style.opacity = "0.2";
                }
                else if (square.style.opacity === "0.2") {
                    square.style.opacity = "0.3";
                }
                else if (square.style.opacity === "0.3") {
                    square.style.opacity = "0.4";
                }
                else if (square.style.opacity === "0.4") {
                    square.style.opacity = "0.5";
                }
                else if (square.style.opacity === "0.5") {
                    square.style.opacity = "0.6";
                }
                else if (square.style.opacity === "0.6") {
                    square.style.opacity = "0.7";
                }
                else if (square.style.opacity === "0.7") {
                    square.style.opacity = "0.8";
                }
                else if (square.style.opacity === "0.8") {
                    square.style.opacity = "0.9";
                }
                else if (square.style.opacity !== "0.9") {
                    square.style.opacity = "0.1";
                }
            }
            else if (opactiy_level === 1) {
                if (square.style.opacity === "0.1") {
                    square.style.opacity = "0.3";
                }
                else if (square.style.opacity === "0.3") {
                    square.style.opacity = "0.5";
                }
                else if (square.style.opacity === "0.5") {
                    square.style.opacity = "0.7";
                }
                else if (square.style.opacity === "0.7") {
                    square.style.opacity = "0.9";
                }
                else if (square.style.opacity !== `0.9`) {
                    square.style.opacity = "0.1";
                }
            }
            else if (opactiy_level === 2) {
                if (square.style.opacity === "0.1") {
                    square.style.opacity = "0.3";
                }
                else if (square.style.opacity === "0.3") {
                    square.style.opacity = "0.6";
                }
                else if (square.style.opacity === "0.6") {
                    square.style.opacity = "0.9";
                }
                else if (square.style.opacity !== "0.9") {
                    square.style.opacity = "0.1";
                }
            }
        }
    }
    else {
        let square = e.target;
        let available = square.getAttribute("class");
        if (available !== "grid-container") {
            let color_value = randomRGB();
            square.style.backgroundColor = color_value;
            if (opactiy_level === 0) {
                if (square.style.opacity === "0.1") {
                    square.style.opacity = "0.2";
                }
                else if (square.style.opacity === "0.2") {
                    square.style.opacity = "0.3";
                }
                else if (square.style.opacity === "0.3") {
                    square.style.opacity = "0.4";
                }
                else if (square.style.opacity === "0.4") {
                    square.style.opacity = "0.5";
                }
                else if (square.style.opacity === "0.5") {
                    square.style.opacity = "0.6";
                }
                else if (square.style.opacity === "0.6") {
                    square.style.opacity = "0.7";
                }
                else if (square.style.opacity === "0.7") {
                    square.style.opacity = "0.8";
                }
                else if (square.style.opacity === "0.8") {
                    square.style.opacity = "0.9";
                }
                else if (square.style.opacity !== "0.9") {
                    square.style.opacity = "0.1";
                }
            }
            else if (opactiy_level === 1) {
                if (square.style.opacity === "0.1") {
                    square.style.opacity = "0.3";
                }
                else if (square.style.opacity === "0.3") {
                    square.style.opacity = "0.5";
                }
                else if (square.style.opacity === "0.5") {
                    square.style.opacity = "0.7";
                }
                else if (square.style.opacity === "0.7") {
                    square.style.opacity = "0.9";
                }
                else if (square.style.opacity !== `0.9`) {
                    square.style.opacity = "0.1";
                }
            }
            else if (opactiy_level === 2) {
                if (square.style.opacity === "0.1") {
                    square.style.opacity = "0.3";
                }
                else if (square.style.opacity === "0.3") {
                    square.style.opacity = "0.6";
                }
                else if (square.style.opacity === "0.6") {
                    square.style.opacity = "0.9";
                }
                else if (square.style.opacity !== "0.9") {
                    square.style.opacity = "0.1";
                }
            }
        }
    }
}
const resetFunction = () => {
    grid_16px();
}
const randomRGB = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}
const selectOpacity = () => {
    opactiy_level = 0;
    buttonOpacity.setAttribute("class", "button-selected");
    buttonOpacity1.removeAttribute("class", "button-selected");
    buttonOpacity2.removeAttribute("class", "button-selected");
}
const selectOpacity1 = () => {
    opactiy_level = 1;
    buttonOpacity.removeAttribute("class", "button-selected");
    buttonOpacity1.setAttribute("class", "button-selected");
    buttonOpacity2.removeAttribute("class", "button-selected");
}
const selectOpacity2 = () => {
    opactiy_level = 2;
    buttonOpacity.removeAttribute("class", "button-selected");
    buttonOpacity1.removeAttribute("class", "button-selected");
    buttonOpacity2.setAttribute("class", "button-selected");
}

//---------SELECT-COLOR-------->
buttonColor.addEventListener("click", selectColor);
buttonRGB.addEventListener("click", selectRGB);
//---------SELECT-COLOR-------->
//---------GRID---------------->
button16px.addEventListener("click", grid_16px);
button32px.addEventListener("click", grid_32px);
button64px.addEventListener("click", grid_64px);
button100px.addEventListener("click", grid_100px);
buttonReset.addEventListener("click", resetFunction);
//---------GRID---------------->
//---------COLOR-GRID---------->
container.addEventListener("mouseover", color_square);
//---------COLOR-GRID---------->
//---------COLOR-OPACITY------->
buttonOpacity.addEventListener("click", selectOpacity);
buttonOpacity1.addEventListener("click", selectOpacity1);
buttonOpacity2.addEventListener("click", selectOpacity2);
//---------COLOR-OPACITY------->