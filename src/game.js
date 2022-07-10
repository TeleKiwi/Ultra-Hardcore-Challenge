const r = require('raylib');
const d = require('./renderer.js');
const b = require('./tiles/block.js');

// nice abstraction away from the bare metal Raylib
class Game
{
    screenWidth;
    screenHeight;
    title;
    targetFPS;

    d;

    blocks;

    constructor(screenWidth, screenHeight, title, targetFPS) {
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.title = title;
        this.targetFPS = targetFPS;
        this.blocks = [];
        this.render = new d.Renderer();

        // test
        this.blocks.push(new b.Block(0, 0, "data/blocks/grass.json"));

        r.InitWindow(screenWidth, screenHeight, title);
        r.SetTargetFPS(targetFPS);
    }

    // game logic
    Tick = () => {
        
    }

    Render = () => {
        r.BeginDrawing();

        this.render.renderBlocks(this.blocks);

        r.EndDrawing();
    }

    isRunning = () => { return !r.WindowShouldClose(); }

    Exit = () => {
        r.CloseWindow();
    }
}

// export code
module.exports.Game = Game;