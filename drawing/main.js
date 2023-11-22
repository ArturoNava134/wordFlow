import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'


//ejercicio1

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const BLOCK_SIZE = 15
const BOARD_WIDTH = 14
const BOARD_HEIGHT = 30

canvas.width = BLOCK_SIZE * BOARD_WIDTH
canvas.height = BLOCK_SIZE * BOARD_HEIGHT

context.scale(BLOCK_SIZE, BLOCK_SIZE)


    const board = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
    

// square
const piece = {
    position: {x:4 , y:19},
    shape: [
        [2]
    ]
}

//game loop

function update () {
    draw()
    window.requestAnimationFrame(update)
    // test()
}




function draw() {
    context.fillStyle = '#CDBDAD'
    context.fillRect(0, 0, canvas.width, canvas.height)

    board.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value == 1){
                context.fillStyle = 'black'
                context.fillRect(x, y, 1, 1)
            }
            if (value == 2){
                context.fillStyle = '#80613F'
                context.fillRect(x, y, 1, 1)
            }
            if (value == 3){
                context.fillStyle = 'red'
                context.fillRect(x, y, 1, 1)
            }
        })
    })

    piece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value) {
                
                context.fillRect(x+piece.position.x, y + piece.position.y, 1, 1)
                if (board[y + piece.position.y][x + piece.position.x] = 1){
                    board[y + piece.position.y][x + piece.position.x] = 2
                }
                

                // let cuadroamarillo = false;

                // if (!cuadroamarillo){
                //     if (board[y = 15][x = 4] = 2){
                //         board[y = 15][x = 4] = 1
                //         cuadroamarillo = true;
                //     }
                // }
            }
        })
    })
}




// ...

let isMouseDown = false;

// Función para agregar un cuadro rojo al mantener presionado el clic izquierdo
const addRedSquareOnMouseDown = (event) => {
    isMouseDown = true;
    addRedSquare(event);
};

// Función para dejar de agregar cuadros rojos al soltar el clic izquierdo
const stopAddingRedSquareOnMouseUp = () => {
    isMouseDown = false;
};

// Función para agregar un cuadro rojo en la posición del clic
const addRedSquare = (event) => {
    if (isMouseDown) {
        const { offsetX, offsetY } = event;

        // Calcular la posición del cuadro rojo en el tablero
        const boardX = Math.floor(offsetX / BLOCK_SIZE);
        const boardY = Math.floor(offsetY / BLOCK_SIZE);

        // Actualizar la posición del cuadro rojo
        piece.position = { x: boardX, y: boardY };

        // Dibujar la actualización
        draw();
    }
};

// Agregar event listeners para el clic izquierdo y movimiento del mouse
canvas.addEventListener('mousedown', addRedSquareOnMouseDown);
canvas.addEventListener('mouseup', stopAddingRedSquareOnMouseUp);
canvas.addEventListener('mousemove', addRedSquare);

// ...

//game loop

// ...

// Resto del código

// ...



// function checkCollision(){
//     return piece.shape.find((row, y) =>{
//         return row.find((value, x) => {
//             board[y + piece.position.y]?.[x + piece.position.x] != 0
//         })
//     })
// }
//paint 

// function paint(){
//     piece.shape.forEach((row, x) => {
//         row.forEach((value, y) => {
//             if (value === 1){
//                 board[y + piece.position.y][x + piece.position.x] = 1
//             }
//         })
//     })
// }

export function test(){
    const boardCompleted = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]

    let areMatricesEqual = true;

 // Verificar si las matrices tienen la misma estructura de números
 for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
        if (boardCompleted[y][x] !== board[y][x]) {
            areMatricesEqual = false;
            break;
        }
    }
    if (!areMatricesEqual) {
        break;
    }
}

if (areMatricesEqual) {
    console.log("Muy bien :)");
    window.location.href = "http://localhost:8080/diseno/projectp3/diseno/iteraccion2/exercises/practice/e25/correcto.html";
} else {
    console.log("Chale");
    window.location.href = "http://localhost:8080/diseno/projectp3/diseno/iteraccion2/exercises/practice/e25/incorrecto.html";
    
}



}



document.querySelector('section').addEventListener('click', () => {
    test()
})


document.getElementById('reiniciar').addEventListener('click', () => {   
   window.location.href = "http://127.0.0.1:5173/";
})


update()


