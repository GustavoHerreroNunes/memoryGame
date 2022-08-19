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
        deck.initialize(game.area.canvas);
        game.screens.initial.initialize();
    },

    screens: {
        initial:{
            initialize: () => {
                game.sprites = new Image();
                game.sprites.onload = () => {
                    deck.drawCards(game.area, game.sprites);
                }
                game.sprites.src = "./src/assets/sprites.png";
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

const cardsType = [
    {
        name: "Feliz",
        sourcePosition: {
            x: 0, y:0,
            height: 256, width:256
        }
    },
    {
        name: "Triste",
        sourcePosition: {
            x: 261, y:0,
            height: 256, width:256
        }
    },
    {
        name: "Bravo",
        sourcePosition: {
            x: 522, y:0,
            height: 256, width:256
        }
    },
    {
        name: "Curioso",
        sourcePosition: {
            x: 0, y:261,
            height: 256, width:256
        }
    },
    {
        name: "Surpreso",
        sourcePosition: {
            x: 261, y:261,
            height: 256, width:256
        }
    },
    {
        name: "Cansado",
        sourcePosition: {
            x: 522, y:261,
            height: 256, width:256
        }
    }
]

const deck = {
    initialize: (canvas) => {
        deck.cardSize = {
            width: canvas.width * 0.15,
            height: canvas.height * (canvas.height > canvas.width ? 0.15 : 0.3)
        }
    },

    drawCards: (area, sprites) => {
        area.context.fillStyle = "#EEE";
        area.context.fillRect(
            area.canvas.width/2 - deck.cardSize.width/2, area.canvas.height/2 - deck.cardSize.height/2,
            deck.cardSize.width, deck.cardSize.height
        );
        area.context.drawImage(
            sprites,
            0,0,
            256, 256,
            area.canvas.width/2 - deck.cardSize.width/2 + 30, area.canvas.height/2 - deck.cardSize.height/2 + 30,
            deck.cardSize.width - 60, deck.cardSize.width - 60
        );
    }
}

window.addEventListener('load', () => {
    game.initialize();
});
