/* JS Library */
"use strict";
// This file can be found by a client request to /js/Movable.js which happens through
// the <script> tag in examples.html.
// The static directory middleware gives the client access to this file.

console.log('Js libraries')

// Different way of creating library: creating an object constructor and then
// adding to its prototype.

// Movable Library

function Grid(numBoxes) {
    this.boxes = [];
    // this.positions = [[]];
    const gridContainer = document.createElement("div");
    gridContainer.id = "grid";

    for (let i = 0; i < numBoxes; i++) {
        const mb = new MovableBox(i, numBoxes, gridContainer);
        this.boxes.push(mb);
    }

    for (let i = 0; i < numBoxes; i++) {
        gridContainer.appendChild(this.boxes[i].dragItem)
        this.boxes[i].dragItem.style.left = i * 300 + 'px';
        this.boxes[i].dragItem.style.top = 0 + 'px';
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

}

function MovableBox(i, numBoxes, gridContainer) {
    // this..
    // this.. (any values you need for each 'instance' of this library)

    const box = document.createElement("div");
    box.id = "box";

    this.dragItem = box;
    // this.empties = document.querySelectorAll('#item');

    this.active = false;
    this.initialX;
    this.initialY;
    this.currentX;
    this.currentY;
    this.offsetX = 0;
    this.offsetY = 0;
    this.content = "box " + i;
    var _this = this;

    // this.dragItem.style.left = i*180+'px';
    // this.dragItem.style.top = 0+'px';

    this.dragItem.innerHTML = this.content;

    // changed from this.dragItem to gridContainer to fix the bug where 
    // if the mouse moves outside of MovableBox it causes a glitch
    gridContainer.addEventListener("touchstart", dragStart, false);
    gridContainer.addEventListener("touchend", dragEnd, false);
    gridContainer.addEventListener("touchmove", drag, false);

    gridContainer.addEventListener("mousedown", dragStart, false);
    gridContainer.addEventListener("mouseup", dragEnd, false);
    gridContainer.addEventListener("mousemove", drag, false);

    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.dragItem.style.backgroundColor = randomColor;

    const body = document.querySelector('body')
    body.append(this.dragItem)
    // this.boxes.push(box)

    function dragStart(e) {
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
        let x = 0;
        let y = 0;
        for (let i = 0; i < numBoxes; i++) {
            if (_this.offsetX > 300 * i - 150 && _this.offsetX < 300 * i + 150) { // if moved to right
                x = 300 * i;
                // console.log(_this.offsetX+" x")
                break;
            }
            else if (_this.offsetX < - 300 * i + 150 && _this.offsetX > - 300 * i - 150) { // if moved to left
                x = - 300 * i;
                // console.log(_this.offsetX+" x")
                break;
            }
        }
        for (let i = 0; i < numBoxes; i++) {
            let s = 0;
            if (_this.offsetY > 440 * i - 220 && _this.offsetY < 440 * i + 220) { // if moved down
                y = 440 * i;
                // console.log(_this.offsetY+" y")
                break;
            }
            else if (_this.offsetY < - 440 * i + 220 && _this.offsetY > - 440 * i - 220) { // if moved up
                y = - 440 * i;
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

    function drag(e) {
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
        // this.dragItem.innerHTML = content;
        this.dragItem.appendChild(content);
        // const body = document.querySelector('body')
        // body.append(content);
    },

    setBoxBackgroundColor: function (color) {
        this.dragItem.style.backgroundColor = color;
    },

    // setEmpties: function (boxes) {
    //     this.empties = boxes;
    // }
}