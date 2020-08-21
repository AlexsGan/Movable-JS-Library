/* JS Library */
"use strict"; // always need a semicolon before an IIFE

// This file can be found by a client request to /js/Movable.js which happens through
// the <script> tag in examples.html.
// The static directory middleware gives the client access to this file.

// Different way of creating library: creating an object constructor and then
// adding to its prototype.

// Movable Library


/* 
Wrap the code that creates your library in an Immediately-Invoked function expression (IIFE).
This allows you to do any setup necessary in this function scope and then only put on the
the global scope the variables needed for developers to access.  Prevents pollution of the 
global scope, conflicts with variables from other libraries, and some control over functionality access.
*/
(function (global) { // the window object serves as the global object in the browser.

    // this function is currently only in the scope of the anonymous function at the moment.
    // default values: numBoxes = 6, middleSpace = 0, gridHeight = 885, gridWidth = 1200, width = 260, height = 400, margins = 15, border = 15
    function Grid(numBoxes = 6, middleSpace = 0, gridHeight = 885, gridWidth = 1200, width = 260, height = 400, margins = 10, border = 15) {
        this.boxes = [];
        // this.positions = [[]];
        const gridContainer = document.createElement("div");
        this.gridContainer = gridContainer;
        gridContainer.id = "grid";
        gridContainer.style.width = gridWidth + "px";     // the width of the grid can be specified,
        gridContainer.style.height = gridHeight + "px";   // along with the height

        for (let i = 0; i < numBoxes; i++) { // create a MovableBox using the specified styles
            const mb = new MovableBox(i, numBoxes, gridContainer, width, height, margins, border);
            this.boxes.push(mb);
        }

        const tmp_width = width + margins + border * 2;
        const tmp_height = height + margins + border * 2;
        const num_box_in_row = Math.floor(gridWidth / tmp_width); // calculate and store the number of boxes that can fit in a row
        let horizontalSpace = 0;

        for (let i = 0; i < numBoxes; i++) {
            gridContainer.appendChild(this.boxes[i].dragItem)

            // wrap boxes based on specified styles so boxes do not expand horizontally where screen cannot see

            this.boxes[i].dragItem.style.left = -margins/2 + (width + margins + border * 2) * (i - num_box_in_row * Math.floor(i / num_box_in_row)) + 'px';
            // the edge of the boxes have their outer margins reduced 

            if (middleSpace > 0) { // add the space in the middle
                if (i >= numBoxes / 2) {
                    horizontalSpace = middleSpace * tmp_height;
                }
            }
            this.boxes[i].dragItem.style.top = -margins/2 + horizontalSpace + (height + margins + border * 2) * Math.floor(i / num_box_in_row) + 'px';
            // this.positions[i][0] = this.boxes[i].dragItem.style.left
            // this.positions[i][1] = this.boxes[i].dragItem.style.up
        }

        const body = document.querySelector('body')
        body.append(gridContainer)
        // for (let i = 0; i < numBoxes; i++) {
        //     this.boxes[i].setEmpties(this.boxes);
        // }
    }

    Grid.prototype = {

        setGridContent: function (content) {
            this.gridContainer.appendChild(content);
        },

        setGridBackgroundColor: function (backgroundColor) {
            this.gridContainer.style.backgroundColor = backgroundColor;
        },
    }
    


    function MovableBox(i, numBoxes, gridContainer, width, height, margins, border) {
        // this..
        // this.. (any values you need for each 'instance' of this library)

        const box = document.createElement("div");
        box.id = "box";

        this.dragItem = box;
        // this.empties = document.querySelectorAll('#item');

        this.gridContainer = gridContainer;
        this.i = i;
        this.active = false;
        this.initialX;
        this.initialY;
        this.currentX;
        this.currentY;
        this.offsetX = 0;
        this.offsetY = 0;
        // this.content = "box " + i;
        // this.dragItem.innerHTML = this.content;

        var _this = this;

        // this.dragItem.style.left = i*180+'px';
        // this.dragItem.style.top = 0+'px';

        var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        this.dragItem.style.backgroundColor = randomColor;

        // update the specified sizing of the box
        this.dragItem.style.border = border + "px solid rgba(130, 130, 130, .5)";
        this.dragItem.style.height = height + "px";
        this.dragItem.style.width = width + "px";

        // default box size with adjustment for where the box will automatically move to after being dragged
        width = width + margins + border * 2;
        height = height + margins + border * 2;

        // changed from this.dragItem to gridContainer to fix the bug where 
        // if the mouse moves outside of MovableBox it causes a glitch
        gridContainer.addEventListener("touchstart", dragStart, false);
        gridContainer.addEventListener("touchend", dragEnd, false);
        gridContainer.addEventListener("touchmove", drag, false);

        gridContainer.addEventListener("mousedown", dragStart, false);
        gridContainer.addEventListener("mouseup", dragEnd, false);
        gridContainer.addEventListener("mousemove", drag, false);

        const body = document.querySelector('body')
        body.append(this.dragItem)
        // this.boxes.push(box)

        function dragStart(e) { // when mouse is clicked on a box
            if (e.type === "mousedown") {
                _this.initialX = e.clientX - _this.offsetX;
                _this.initialY = e.clientY - _this.offsetY;
            } else {
                _this.initialX = e.touches[0].clientX - _this.offsetX;
                _this.initialY = e.touches[0].clientY - _this.offsetY;
            }

            if (e.target === _this.dragItem) {
                _this.active = true;
            }
        }

        function dragEnd(e) {
            // the destination of a box being dragged to is adjusted based on the chosen box sizes and margins
            let x = 0;
            let y = 0;
            for (let i = 0; i < numBoxes; i++) {
                if (_this.offsetX > width * i - width / 2 && _this.offsetX < width * i + width / 2) { // if moved to right
                    x = width * i;
                    // console.log(_this.offsetX+" x")
                    break;
                }
                else if (_this.offsetX < - width * i + width / 2 && _this.offsetX > - width * i - width / 2) { // if moved to left
                    x = - width * i;
                    // console.log(_this.offsetX+" x")
                    break;
                }
            }
            for (let i = 0; i < numBoxes; i++) {
                let s = 0;
                if (_this.offsetY > height * i - height / 2 && _this.offsetY < height * i + height / 2) { // if moved down
                    y = height * i;
                    // console.log(_this.offsetY+" y")
                    break;
                }
                else if (_this.offsetY < - height * i + height / 2 && _this.offsetY > - height * i - height / 2) { // if moved up
                    y = - height * i;
                    // console.log(_this.offsetY+" y")
                    break;
                }
            }
            _this.currentX = x;
            _this.currentY = y;
            _this.dragItem.style.transform = "translate3d(" + x + "px, " + y + "px, 0)"; // set box to the closest legal location

            _this.initialX = _this.currentX;
            _this.initialY = _this.currentY;

            _this.offsetX = _this.currentX;
            _this.offsetY = _this.currentY;

            _this.active = false;
        }

        function drag(e) { // changing the view of the box that is being dragged
            if (_this.active) {
                e.preventDefault();
                if (e.type === "mousemove") {
                    _this.currentX = e.clientX - _this.initialX;
                    _this.currentY = e.clientY - _this.initialY;
                }
                else {
                    _this.currentX = e.touches[0].clientX - _this.initialX;
                    _this.currentY = e.touches[0].clientY - _this.initialY;
                }

                _this.offsetX = _this.currentX;
                _this.offsetY = _this.currentY;

                _this.dragItem.style.transform = "translate3d(" + _this.currentX + "px, " + _this.currentY + "px, 0)";
            }
        }
    }

    // Added common funcionality to the prototype property of the constructor.
    MovableBox.prototype = {

        setBoxContent: function (content) {
            this.dragItem.appendChild(content);
            // content.onclick = this.gridContainer;
        },

        setBoxBackgroundColor: function (backgroundColor) {
            this.dragItem.style.backgroundColor = backgroundColor;
        },

        setBoxTextColor: function (color) {
            this.dragItem.style.color = color;
        }

        // setEmpties: function (boxes) {
        //     this.empties = boxes;
        // }
    }


    // After setup:
    // Add the Grid and MovableBox to the window object if they didn't already exist.
    global.Grid = global.Grid || Grid;
    global.MovableBox = global.MovableBox || MovableBox;

})(window); // pass the window object to the anonymous functions. Can also pass other global functions like jQuery.