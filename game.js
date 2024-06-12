const canvas = document.querySelector("#game")
const game = canvas.getContext ("2d")

window.addEventListener("load",startGame)

function startGame() {

    //forma de crear rectangulos
    game.fillRect(0,0,101,101)
    //form de borrar rectangulos
    game.clearRect(0,10,50,50)
    //tamaño y estilo de texto
    game.font = "30px Verdana"
    //color de texto
    game.fillStyle = "purple"
    //ubicacion a partir de la posicion "x" e "y que le asigno al crearlo"
    //puede ser "start" "right" "left" "end" o "center"
    game.textAlign = "left"
    //para insertar texto y arriba antes de crearlo lo modifico
    game.fillText("Martinis", 25,25)
}