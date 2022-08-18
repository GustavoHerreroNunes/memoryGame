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
        game.screens.initial.initialize();
    },

    screens: {
        initial:{
            initialize: () => {

            }
        },

        play: {
            initialize: () => {
                game.animationFrameId = requestAnimationFrame(game.screens.play.loop);
            },

            loop: () => {
                console.log("Loop do jogo");
                game.animationFrameId = requestAnimationFrame(game.screens.play.loop);
            }
        },

        last: {
            initialize: () => {
                cancelAnimationFrame(game.animationFrameId);
            }
        }
    }
}

window.addEventListener('load', () => {
    game.initialize();
});
