window.addEventListener('load', () => {
    game.initialize();
});

const game = {
    area: {
        initialize: () => {
            game.area.canvas = document.querySelector("#game-area");
            game.area.context = game.area.canvas.getContext("2d");
            game.area.resize();
        },

        resize: () => {
            game.area.canvas.width = window.innerWidth;
            game.area.canvas.height = window.innerHeight;
        }
    },

    initialize: () => {
        console.log("Iniciando jogo...");
        game.area.initialize();
    },
}