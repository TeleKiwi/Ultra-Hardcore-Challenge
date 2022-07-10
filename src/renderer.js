const r = require('raylib');

class Renderer
{
    renderBlocks = (blocks) => {
        let texture;
        blocks.forEach(element => {
            texture = r.LoadTexture(element.data.texture);
            r.DrawTexture(texture, element.x, element.y, r.WHITE);
        }); 
        r.UnloadTexture(texture);
    }
}

// export code
module.exports.Renderer = Renderer;