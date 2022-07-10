const fs = require("fs");

class Block 
{
    x;
    y;
    f;
    data;

    constructor(x, y, filePath) {
        this.x = x;
        this.y = y;

        this.f = fs.readFileSync(filePath);
        this.data = JSON.parse(this.f);
    }


}

// export code
module.exports.Block = Block;