const r = require('raylib');

class Renderer
{
    texture;
    constructor() {
        this.texture = "assets/sprites/air.png"; // default value
    }

    renderBlocks = (blocks) => {
        blocks.forEach(element => {
            this.texture = r.LoadTexture(element.data.texture);
            r.DrawTexture(this.texture, element.x, element.y, r.RAYWHITE);
        }); 
    }
}

// export code
module.exports.Renderer = Renderer;