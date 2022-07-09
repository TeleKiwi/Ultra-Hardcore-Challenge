class Block 
{
    x;
    y;
    data;

    constructor(x, y, file) {
        this.x = x;
        this.y = y;
        this.data = JSON.parse(file);
    }


}