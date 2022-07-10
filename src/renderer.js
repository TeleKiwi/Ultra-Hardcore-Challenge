const r = require('raylib');

class Renderer
{
    texture;
    constructor() {
        this.texture = "assets/sprites/missing.png"; // default value
    }

    renderBlocks = (blocks) => {
        blocks.forEach(element => {
            if(element.data.visible === false ) { return; } // rendering invisible blocks is a waste
            try {
                this.texture = r.LoadTexture(element.data.texture);
            } catch (err) {
                this.texture = "assets/sprites/missing.png";
            } finally {
                r.DrawTexture(this.texture, element.x, element.y, r.RAYWHITE);
            }
            
        }); 
    }
}

// export code
module.exports.Renderer = Renderer;