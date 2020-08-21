// The landing page of Movable library

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

function examples1() {
	const description1 = document.createElement("div");
	description1.innerHTML = "Example 1:";
	description1.style.fontSize = "30px";
	description1.style.fontFamily = "Verdana";
	description1.style.marginBottom = "20px";	
	const description2 = document.createElement("div");

	description2.innerHTML = "Basic Grid with 6 Movable boxes simulating product comparisons. The ability to drag boxes, where each box contains one product, makes product comparisons especially easy.";
	description2.style.fontSize = "16px";
	description2.style.fontFamily = "Verdana";
	description2.style.marginBottom = "20px";
	const body = document.querySelector('body');
	body.append(description1);
	body.append(description2);

	// create a default grid with 6 default boxes
	const grid = new Grid();

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
}


function examples2() {
	const description1 = document.createElement("div");
	description1.innerHTML = "Example 2:";
	description1.style.fontSize = "30px";
	description1.style.fontFamily = "Verdana";
	description1.style.marginBottom = "20px";
	description1.style.marginTop = "50px";	
	const description2 = document.createElement("div");

	description2.innerHTML = "Customized Grid with 4 boxes simulating a gallery showcasing people's photos or artworks, where they can move their images around for a better appearance.";
	description2.style.fontSize = "16px";
	description2.style.fontFamily = "Verdana";
	description2.style.marginBottom = "20px";
	const body = document.querySelector('body');
	body.append(description1);
	body.append(description2);

	// create a grid with specified gridwidth along with 4 boxes also with specified size
	const grid2 = new Grid(4, null, 1040, 1040, 300, 300, 0, 20);
	grid2.setGridBackgroundColor("PowderBlue");

	const content1 = document.createElement("div");
	const img = document.createElement("img");
	img.src = "image_part_001.jpg";
	content1.appendChild(img);

	const content2 = document.createElement("div");
	const img2 = document.createElement("img");
	img2.src = "image_part_002.jpg";
	content2.appendChild(img2);

	const content3 = document.createElement("div");
	const img3 = document.createElement("img");
	img3.src = "image_part_003.jpg";
	content3.appendChild(img3);

	const content4 = document.createElement("div");
	const img4= document.createElement("img");
	img4.src = "image_part_004.jpg";
	content4.appendChild(img4);

	grid2.boxes[0].setBoxContent(content1);
	grid2.boxes[1].setBoxContent(content2);
	grid2.boxes[2].setBoxContent(content3);
	grid2.boxes[3].setBoxContent(content4);
}


function examples3() {
	const description1 = document.createElement("div");
	description1.innerHTML = "Example 3:";
	description1.style.fontSize = "30px";
	description1.style.fontFamily = "Verdana";
	description1.style.marginBottom = "20px";
	description1.style.marginTop = "50px";	
	const description2 = document.createElement("div");

	description2.innerHTML = "Customized Grid with 32 boxes simulating a chessboard. Chesspiece images and descriptions can be added to each box.";
	description2.style.fontSize = "16px";
	description2.style.fontFamily = "Verdana";
	description2.style.marginBottom = "20px";
	const body = document.querySelector('body');
	body.append(description1);
	body.append(description2);

	// create a customized grid with 4 box's worth of space in middle
	// this simulates a chess board with chess pieces
	let middleSpace, gridHeight
	const grid3 = new Grid(32, middleSpace=4, gridHeight=800, 800, 70, 70, 10, 10);

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

	grid3.setGridBackgroundColor("Peru");

	const content1 = document.createElement("div");
	const img = document.createElement("img");
	img.src = "chessboard_pic.png";	// add the chessboard background
	content1.appendChild(img);
	grid3.setGridContent(content1)

	// you can always add the images of each chesspiece to each box as well as 
	// changing the name of each box
}

examples1();
examples2();
examples3();

function documentation(){ // display the documentation in the landing page
	// 'Getting Started' section that includes short instructions for getting developers set up to use your library. 
	const title1 = document.createElement("div");
	title1.innerHTML = "Getting Started:";
	title1.style.textAlign = "center";
	title1.style.fontSize = "40px";
	title1.style.fontFamily = "Verdana";
	title1.style.marginBottom = "30px";
	title1.style.marginTop = "100px";	

	const description1 = document.createElement("div");
	description1.innerHTML = "The scripts to include in your html header: <br/> <br/>" +
								'(link rel="stylesheet" type="text/css" href="Movable.css") <br> <br>'+
								'(script defer type="text/javascript" src="js/Movable.js") <br> <br>'+
								'in this order followed by the js file that uses this library. In this webpage for example, include <br> <br>'+
								'(script defer type="text/javascript" src="js/examples.js")';
	description1.style.fontSize = "16px";
	description1.style.fontFamily = "Verdana";
	description1.style.marginBottom = "100px";
	const body = document.querySelector('body');
	body.append(title1);
	body.append(description1);

	// A list of API for the library
	// title
	const title2 = document.createElement("div");
	title2.innerHTML = "API";
	title2.style.textAlign = "center";
	title2.style.fontSize = "40px";
	title2.style.fontFamily = "Verdana";
	title2.style.marginBottom = "30px";
	title2.style.marginTop = "70px";
	body.append(title2);	

	// Object creations
	const description2 = document.createElement("div");
	description2.innerHTML = '<b>To create new Objects:</b><br><br>';
	description2.style.fontSize = "16px";
	description2.style.fontFamily = "Verdana";
	description2.style.marginBottom = "50px";

	const img1 = document.createElement("img");
	img1.src = "object_descriptions_pic.png";	
	description2.appendChild(img1);

	body.append(description2);

	// Using Grid functions
	const description3 = document.createElement("div");
	description3.innerHTML = '<b>To use Grid functions:</b><br><br>';
	description3.style.fontSize = "16px";
	description3.style.fontFamily = "Verdana";
	description3.style.marginBottom = "50px";

	const img2 = document.createElement("img");
	img2.src = "grid_functions_pic.png";	
	description3.appendChild(img2);

	body.appendChild(description3);

	// Using Movablebox functions
	const description4 = document.createElement("div");
	description4.innerHTML = '<b>To use Movablebox functions:</b><br><br>';
	description4.style.fontSize = "16px";
	description4.style.fontFamily = "Verdana";
	description4.style.marginBottom = "200px";

	const img3 = document.createElement("img");
	img3.src = "movablebox_functions_pic.png";	
	description4.appendChild(img3);

	body.appendChild(description4);
}

documentation();



///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

function apiExamples() {

	let numBoxes, middleSpace, gridHeight, gridWidth, width, height, margins, border;
	
	// create a default grid with default number of boxes
	const grid = new Grid();
	
	// create a grid with specified gridwidth along with 4 boxes also with specified size
	const grid2 = new Grid(numBoxes = 4, middleSpace = 0, gridHeight = 1040, gridWidth = 1040, width = 300, height = 300, margins = 0, border = 20);
	
	// all parameters are optional: 
	//		numBoxes:		number of MovableBox to create
	// 		middleSpace:	the space that divides half the MovableBox
	// 		gridHeight:		height of the Grid
	//		gridWidth: 		width of the Grid
	//		width:			width of each MovableBox
	//		height: 		height of each MovableBox
	//		margins:		margins (top = left = right = bottom) of each MovableBox
	//		border: 		border width (top = left = right = bottom) of each MovableBox

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	const gridContent = document.createElement("div");
	const gridBackgroundImg = document.createElement("img");
	gridBackgroundImg.src = "image_part_001.png";	
	gridContent.appendChild(gridBackgroundImg);

	// Grid functions: 

	// set the background color of the Grid
	grid.setGridBackgroundColor("PowderBlue");

	// set the content of the Grid
	grid.setGridContent(gridContent)

	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	const content0 = document.createElement("div");
	content0.innerHTML = "--content of the box here--";

	// MovableBox functions:

	// set the background color of the first MovableBox in the Grid 
	grid.boxes[0].setBoxBackgroundColor("pink");

	// set the content of the first MovableBox in the Grid
	grid.boxes[0].setBoxContent(content0);

	// set the text color of the second MovableBox in the Grid
	grid.boxes[1].setBoxTextColor("blue");

}

