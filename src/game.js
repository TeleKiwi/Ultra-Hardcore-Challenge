const r = require('raylib');

// nice abstraction away from the bare metal Raylib
class Game
{
    screenWidth;
    screenHeight;
    title;
    targetFPS;

    constructor(screenWidth, screenHeight, title, targetFPS) {
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.title = title;
        this.targetFPS = targetFPS;

        r.InitWindow(screenWidth, screenHeight, title);
        r.SetTargetFPS(targetFPS);
    }

    // game logic
    Tick = () => {

    }

    Render = () => {
        r.BeginDrawing();

        r.ClearBackground(r.WHITE);

        r.DrawTexture(r.LoadTexture("./art/blocks.png"), 14, 14, r.WHITE);

        r.EndDrawing();
    }

    isRunning = () => { return !r.WindowShouldClose(); }

    Exit = () => {
        r.CloseWindow();
    }
}

// export code
module.exports.Game = Game;