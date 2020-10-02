# Movable-JS-Library

* A link to the landing page:
https://gentle-retreat-99993.herokuapp.com/examples.html

* A copy of the 'Getting Started' section from the documentation:

The scripts to include in your html header: 
	(link rel="stylesheet" type="text/css" href="Movable.css")
	(script defer type="text/javascript" src="js/Movable.js") 
in this order followed by the js file that uses this library. In this webpage for example, include
	(script defer type="text/javascript" src="js/examples.js")


* A direct link to the documentation:
https://gentle-retreat-99993.herokuapp.com/examples.html
(this is the same link as the landing page as the documentation is at the bottom of it)

Below is a copy of the 'api' section from the documentation:

To create new Objects:
	
	// initializing arguments
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

To use Grid functions:

    	// creating contents to be added
	const gridContent = document.createElement("div");
	const gridBackgroundImg = document.createElement("img");
	gridBackgroundImg.src = "image_part_001.png";	
	gridContent.appendChild(gridBackgroundImg);
	
	// Grid functions: 

	// set the background color of the Grid
	grid.setGridBackgroundColor("PowderBlue");

	// set the content of the Grid
	grid.setGridContent(gridContent)

To use MovableBox functions:
    
	// creating contents to be added
	const content0 = document.createElement("div");
	content0.innerHTML = "--content of the box here--";
	
	// MovableBox functions:

	// set the background color of the first MovableBox in the Grid 
	grid.boxes[0].setBoxBackgroundColor("pink");

	// set the content of the first MovableBox in the Grid
	grid.boxes[0].setBoxContent(content0);

	// set the text color of the second MovableBox in the Grid
	grid.boxes[1].setBoxTextColor("blue");
