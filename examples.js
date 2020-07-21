/* dom content loaded */
"use strict";
const log = console.log
log('Loading DOM Content')

function logId(element) {
	log(element.id)
}

const grid = new Grid(4);

// const mb = new MovableBox();
// const mb2 = new MovableBox();

// /* grid element */
// const grid = document.createElement('div')
// grid.id = "grid";

// const body = document.querySelector('body')
// body.append(grid)