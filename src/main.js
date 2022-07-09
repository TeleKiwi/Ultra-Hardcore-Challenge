const G = require("./game.js")

const g = new G.Game(800, 450, "UHC", 60);

while(g.isRunning()) {
    g.Tick();
    g.Render();
}

g.Exit();

