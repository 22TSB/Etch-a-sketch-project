//---------BUTTONS---------------->
const container = document.querySelector('.gridContainer');
const buttonColor = document.querySelector('.colorButtons');
const buttonRGB = document.querySelector('.colorButtonRGB');
const buttonReset = document.querySelector('.resetButton');
const getColor = document.querySelector('.inputColor');
const buttonOpacity = document.querySelector('.opacityButton');
const buttonOpacity1 = document.querySelector('.opacity1Button');
const buttonOpacity2 = document.querySelector('.opacity2Button');
const buttonMaxOpacity = document.querySelector('.maxOpacityButton');

const rangeSize = document.querySelector('.rangeSize');

let gridLayout = 16;
let gridColor = false;
let opacityLevel = 0;

//---------GRID---------------->
const DEFAULT_GRID = (size) => {
    const dimension = 676 / size;
    for (i = 1; i <= size * size; ++i) {
        const sq = document.createElement('div');
        sq.style = `height: ${dimension}px; width: ${dimension}px; box-sizing: border-box;`;
        container.append(sq);
    }
};

const emptyBoard = (size) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};

//---------FUNCTIONS----------->
const color_square = (e) => {
    if (!isDown) {
        return;
    }
    
    if (!gridColor) {
        let square = e.target;
        let available = square.getAttribute('class');
        if (available !== 'gridContainer') {
            let color_value = getColor.value;
            square.style.backgroundColor = color_value;
            // if (square.style.opacity === "0") {
            // 	square.style.opacity = "0";
            // }
            square.style.opacity ??= 0;
            switch (opacityLevel) {
                case 0:
                    if (square.style.opacity < 1) {
                        square.style.opacity = String(Number(square.style.opacity) + 0.1);
                    }
                    break;
                case 1:
                    if (square.style.opacity < 1) {
                        square.style.opacity = String(Number(square.style.opacity) + 0.2)
                    }
                    break;
                case 2:
                    if (square.style.opacity < 1) {
                        square.style.opacity = String(Number(square.style.opacity) + 0.3)
                    }
                    break;
                case 10:
                    square.style.opacity = "1";
                    break;
            }
        }
    } else {
        let square = e.target;
        let available = square.getAttribute('class');
        if (available !== 'gridContainer') {
            let color_value = randomRGB();
            square.style.backgroundColor = color_value;
            if (!square.style.opacity) {
                square.style.opacity = 0;
            }
            switch (opacityLevel) {
                case 0:
                    if (square.style.opacity < 1) {
                        square.style.opacity = String(Number(square.style.opacity) + 0.1);
                    }
                    break;
                case 1:
                    if (square.style.opacity < 1) {
                        square.style.opacity = String(Number(square.style.opacity) + 0.2)
                    }
                    break;
                case 2:
                    if (square.style.opacity < 1) {
                        square.style.opacity = String(Number(square.style.opacity) + 0.3)
                    }
                    break;
                case 10:
                    square.style.opacity = "1";
                    break;
            }
        }
    }
};

const resetFunction = () => {
    emptyBoard(gridLayout);
    DEFAULT_GRID(16);
    gridLayout = 16;
};

const randomRGB = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + randomColor;
};

const selectOpacity = () => {
    opacityLevel = 0;
    buttonOpacity.setAttribute('class', 'buttonSelected');
    buttonOpacity1.removeAttribute('class', 'buttonSelected');
    buttonOpacity2.removeAttribute('class', 'buttonSelected');
    buttonMaxOpacity.removeAttribute('class', 'buttonSelected');
};

const selectOpacity1 = () => {
    opacityLevel = 1;
    buttonOpacity.removeAttribute('class', 'buttonSelected');
    buttonOpacity1.setAttribute('class', 'buttonSelected');
    buttonOpacity2.removeAttribute('class', 'buttonSelected');
    buttonMaxOpacity.removeAttribute('class', 'buttonSelected');
};

const selectOpacity2 = () => {
    opacityLevel = 2;
    buttonOpacity.removeAttribute('class', 'buttonSelected');
    buttonOpacity1.removeAttribute('class', 'buttonSelected');
    buttonOpacity2.setAttribute('class', 'buttonSelected');
    buttonMaxOpacity.removeAttribute('class', 'buttonSelected');
};

const selectMaxOpacity = () => {
    opacityLevel = 10;
    buttonOpacity.removeAttribute('class', 'buttonSelected');
    buttonOpacity1.removeAttribute('class', 'buttonSelected');
    buttonOpacity2.removeAttribute('class', 'buttonSelected');
    buttonMaxOpacity.setAttribute('class', 'buttonSelected');
};

const selectColor = () => {
    gridColor = false;
    buttonColor.setAttribute('class', 'buttonSelected');
    buttonRGB.removeAttribute('class', 'buttonSelected');
};

const selectRGB = () => {
    gridColor = true;
    buttonRGB.setAttribute('class', 'buttonSelected');
    buttonColor.removeAttribute('class', 'buttonSelected');
};

//---------SELECT-COLOR-------->
buttonColor.addEventListener('click', selectColor);
buttonRGB.addEventListener('click', selectRGB);

//---------COLOR-GRID---------->

let isDown = false;
const secondsToHold = 1;
container.addEventListener('mousedown', function (event) {
    event.preventDefault();
    if (isDown == false) {
        isDown = true;
    }
});

container.addEventListener('mouseover', color_square);

container.addEventListener('mouseup', function (event) {
    isDown = false;
});

//---------COLOR-OPACITY------->
buttonOpacity.addEventListener('click', selectOpacity);
buttonOpacity1.addEventListener('click', selectOpacity1);
buttonOpacity2.addEventListener('click', selectOpacity2);
buttonMaxOpacity.addEventListener('click', selectMaxOpacity);

//---------RESET-GRID------->
buttonReset.addEventListener('click', resetFunction);

//---------DEFAUL-GRID------->
rangeSize.addEventListener('input', (e) => {
    const size = e.target.value;
    emptyBoard(gridLayout);
    DEFAULT_GRID(size);
    gridLayout = size;
});

DEFAULT_GRID(16);