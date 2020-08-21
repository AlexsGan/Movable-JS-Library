/* dom content loaded */
"use strict";
// This file can be found by a client request to /js/Movable.js which happens through
// the <script> tag in examples.html.
// The static directory middleware gives the client access to this file.

const log = console.log
log('Loading DOM Content')

function logId(element) {
	log(element.id)
}

// below are example usage of the library

////////////////////////////////
// create a default grid with 6 default boxes
const grid = new Grid(6);

// const mb = new MovableBox(1, 4);
// adding pure text and setting colour
const content0 = document.createElement("div");
content0.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

grid.boxes[0].setBoxContent(content0);
grid.boxes[0].setBoxBackgroundColor("pink");

// adding an image and a text
const content1 = document.createElement("div");
const imgDescription = document.createElement("div");
imgDescription.innerHTML = "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
const img = document.createElement("img");
img.src = "individual_pic_1.png";
content1.appendChild(img);
content1.appendChild(imgDescription);

grid.boxes[1].setBoxContent(content1);

// adding an image and a text
const content2 = document.createElement("div");
const imgDescription2 = document.createElement("div");
imgDescription2.innerHTML = "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
const img2 = document.createElement("img");
img2.src = "individual_pic_2.jpg";
content2.appendChild(img2);
content2.appendChild(imgDescription2);

grid.boxes[3].setBoxContent(content2);


////////////////////////////////
// create a grid with specified gridwidth along with 4 boxes also with specified size
const grid2 = new Grid(4, null, 1060, 1060, 300, 300, 10, 20);
grid2.setGridBackgroundColor("PowderBlue");


////////////////////////////////
// create a customized grid with 4 box's worth of space in middle
// this simulates a chess board with chess pieces
const grid3 = new Grid(32, 4, 780, 780, 66, 66, 10, 10);

for (let i = 0; i < 16; i++) {
	grid3.boxes[i].setBoxBackgroundColor("white");
}
for (let i = 16; i < 32; i++) {
	grid3.boxes[i].setBoxBackgroundColor("black");
	grid3.boxes[i].setBoxTextColor("white");
}
const content27 = document.createElement("div");
content27.innerHTML = "King";
grid3.boxes[27].setBoxContent(content27);
const content28 = document.createElement("div");
content28.innerHTML = "Queen";
grid3.boxes[28].setBoxContent(content28);

grid3.setGridBackgroundColor("Peru")

// you can always add the images of each chesspiece to each box as well as 
// changing the name of each box