const r = require('raylib');

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

    Tick = () => {

    }

    Render = () => {
        r.BeginDrawing();

        r.ClearBackground(r.RAYWHITE);
        r.DrawText("Congrats! You created your first node-raylib window!", 120, 200, 20, r.LIGHTGRAY);
        
        r.EndDrawing();
    }

    isRunning = () => { return !r.WindowShouldClose(); }

    Exit = () => {
        r.CloseWindow();
    }
}

module.exports.Game = Game;