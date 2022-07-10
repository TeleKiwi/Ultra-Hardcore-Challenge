const fs = require("fs");

class Block 
{
    x;
    y;
    f;
    data;

    constructor(x, y, filePath) {
        this.x = this.absolute(x);
        this.y = this.absolute(y);

        this.f = fs.readFileSync(filePath);
        this.data = JSON.parse(this.f);
    }

    // converts uhc "grid system" to absolute pixels
    absolute = (pixelNum) => { return (pixelNum * 64); } 
}

// export code
module.exports.Block = Block;