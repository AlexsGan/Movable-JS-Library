/* dom content loaded */
"use strict";
const log = console.log
log('Loading DOM Content')

function logId(element) {
	log(element.id)
}

// below are example usage of the library

// create two grids with 4 boxes each
const grid = new Grid(4);
const grid2 = new Grid(4);

// adding pure text and setting colour
const content0 = document.createElement("div");
content0.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

grid.boxes[0].setBoxContent(content0);
grid.boxes[0].setBoxBackgroundColor("pink");

// adding an image and a text
const content1 = document.createElement("div");
const imgDescription = document.createElement("div");
imgDescription.innerHTML = "Description of the image above."
const img = document.createElement("img");
img.src = "individual_pic_1.png";
content1.appendChild(img);
content1.appendChild(imgDescription);

grid.boxes[1].setBoxContent(content1);

