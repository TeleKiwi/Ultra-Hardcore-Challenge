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
        this.blocks.push(new b.Block(1, 0, "data/blocks/dirt.json"));

        r.InitWindow(screenWidth, screenHeight, title);
        r.SetTargetFPS(targetFPS);
    }

    // game logic
    Tick = () => {
        
    }

    Render = () => {
        r.BeginDrawing();
        r.ClearBackground(r.RAYWHITE);

        this.render.renderBlocks(this.blocks);

        r.DrawFPS(0, 0)

        r.EndDrawing();
    }

    isRunning = () => { return !r.WindowShouldClose(); }

    Exit = () => {
        r.UnloadTexture(this.render.texture);
        r.CloseWindow();
    }
}

// export code
module.exports.Game = Game;