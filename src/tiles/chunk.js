const { Block } = require("./block.js");

class Chunk extends Block
{
    // counts what chunk it is, where origin is 0, 
    // left of it is negative, and right of it is positive.
    num;
    contents;

    constructor(num, contents) {
        this.num = num;
        this.contents = [];
    }
}