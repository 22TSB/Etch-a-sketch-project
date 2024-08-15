//---------BUTTONS---------------->
const container = document.querySelector('.grid-container');
const buttonColor = document.querySelector('.color-buttons');
const buttonRGB = document.querySelector('.color-button-rgb');
const button16px = document.querySelector('.button-16px');
const button32px = document.querySelector('.button-32px');
const button64px = document.querySelector('.button-64px');
const button100px = document.querySelector('.button-100px');
const buttonReset = document.querySelector('.reset-button');
const getColor = document.querySelector('.input-color');
const buttonOpacity = document.querySelector('.opacity-button');
const buttonOpacity1 = document.querySelector('.opacity1-button');
const buttonOpacity2 = document.querySelector('.opacity2-button');
const buttonMaxOpacity = document.querySelector('.maxOpacity-button');

var gridLayout = 16;
var gridColor = false;
var opacityLevel = 0;

//---------GRID---------------->
const DEFAULT_GRID = () => {
	for (i = 1; i <= 16 * 16; ++i) {
	  	const sq = document.createElement('div');
	  	sq.setAttribute('class', `sq-pixel-16 sq-pixel-16-${i}`);
	  	container.append(sq);
	}
};

const grid_16px = () => {
  	for (i = 1; i <= gridLayout * gridLayout; ++i) {
    	container.firstElementChild.remove();
  	}
  	for (i = 1; i <= 16 * 16; ++i) {
    	const sq = document.createElement('div');
    	sq.setAttribute('class', `sq-pixel-16 sq-pixel-16-${i}`);
    	container.append(sq);
  	}
  	gridLayout = 16;
};

const grid_32px = () => {
	for (i = 1; i <= gridLayout * gridLayout; ++i) {
		container.firstElementChild.remove();
	}
	for (i = 1; i <= 32 * 32; ++i) {
		const sq = document.createElement('div');
		sq.setAttribute('class', `sq-pixel-32 sq-pixel-32-${i}`);
		container.append(sq);
	}
	gridLayout = 32;
};

const grid_64px = () => {
	for (i = 1; i <= gridLayout * gridLayout; ++i) {
		container.firstElementChild.remove();
	}
	for (i = 1; i <= 64 * 64; ++i) {
		const sq = document.createElement('div');
		sq.setAttribute('class', `sq-pixel-64 sq-pixel-64-${i}`);
		container.append(sq);
	}
	gridLayout = 64;
};

const grid_100px = () => {
	for (i = 1; i <= gridLayout * gridLayout; ++i) {
		container.firstElementChild.remove();
	}
	for (i = 1; i <= 100 * 100; ++i) {
		const sq = document.createElement('div');
		sq.setAttribute('class', `sq-pixel-100 sq-pixel-100-${i}`);
		container.append(sq);
	}
	gridLayout = 100;
};

//---------FUNCTIONS----------->
const color_square = (e) => {
if (!gridColor) {
    let square = e.target;
    let available = square.getAttribute('class');
    if (available !== 'grid-container') {
      	let color_value = getColor.value;
      	square.style.backgroundColor = color_value;
		if (square.style.opacity === "0") {
			square.style.opacity = "0";
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
else {
    let square = e.target;
    let available = square.getAttribute('class');
    if (available !== 'grid-container') {
      	let color_value = randomRGB();
      	square.style.backgroundColor = color_value;
      	if (square.style.opacity === "0") {
			square.style.opacity = "0";
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
  grid_16px();
};

const randomRGB = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + randomColor;
};

const selectOpacity = () => {
  opacityLevel = 0;
  buttonOpacity.setAttribute('class', 'button-selected');
  buttonOpacity1.removeAttribute('class', 'button-selected');
  buttonOpacity2.removeAttribute('class', 'button-selected');
  buttonMaxOpacity.removeAttribute('class', 'button-selected');
};

const selectOpacity1 = () => {
  opacityLevel = 1;
  buttonOpacity.removeAttribute('class', 'button-selected');
  buttonOpacity1.setAttribute('class', 'button-selected');
  buttonOpacity2.removeAttribute('class', 'button-selected');
  buttonMaxOpacity.removeAttribute('class', 'button-selected');
};

const selectOpacity2 = () => {
  opacityLevel = 2;
  buttonOpacity.removeAttribute('class', 'button-selected');
  buttonOpacity1.removeAttribute('class', 'button-selected');
  buttonOpacity2.setAttribute('class', 'button-selected');
  buttonMaxOpacity.removeAttribute('class', 'button-selected');
};

const selectMaxOpacity = () => {
  opacityLevel = 10;
  buttonOpacity.removeAttribute('class', 'button-selected');
  buttonOpacity1.removeAttribute('class', 'button-selected');
  buttonOpacity2.removeAttribute('class', 'button-selected');
  buttonMaxOpacity.setAttribute('class', 'button-selected');
};

const selectColor = () => {
	gridColor = false;
	buttonColor.setAttribute('class', 'button-selected');
	buttonRGB.removeAttribute('class', 'button-selected');
};

const selectRGB = () => {
	gridColor = true;
	buttonRGB.setAttribute('class', 'button-selected');
	buttonColor.removeAttribute('class', 'button-selected');
};

//---------SELECT-COLOR-------->
buttonColor.addEventListener('click', selectColor);
buttonRGB.addEventListener('click', selectRGB);

//---------GRID---------------->
button16px.addEventListener("click", grid_16px);
button32px.addEventListener('click', grid_32px);
button64px.addEventListener('click', grid_64px);
button100px.addEventListener('click', grid_100px);
buttonReset.addEventListener('click', resetFunction);

//---------COLOR-GRID---------->
container.addEventListener('mouseover', color_square);

//---------COLOR-OPACITY------->
buttonOpacity.addEventListener('click', selectOpacity);
buttonOpacity1.addEventListener('click', selectOpacity1);
buttonOpacity2.addEventListener('click', selectOpacity2);
buttonMaxOpacity.addEventListener('click', selectMaxOpacity);

//---------DEFAUL-GRID------->
DEFAULT_GRID();