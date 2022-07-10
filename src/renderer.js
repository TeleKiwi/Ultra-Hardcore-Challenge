const r = require('raylib');

class Renderer
{
    renderBlocks = (blocks) => {
        let texture;
        blocks.forEach(element => {
            r.DrawTexture(, element.x, element.y, r.WHITE);
        }); 
    }
}

// export code
module.exports.Renderer = Renderer;