// Variables para almacenar letras y nombre
let currentInput = '';
let storedName = '';

// Evento de clic en los botones de letras
document.querySelectorAll('.letter-button').forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.innerText;
        updateInputBar();
    });
});

// Evento de clic en el botón de espacio
document.getElementById('space-button').addEventListener('click', () => {
    currentInput += ' ';
    updateInputBar();
});

// Evento de clic en el botón de borrar
document.getElementById('delete-button').addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);
    updateInputBar();
});

// Evento de clic en el botón de empezar
document.getElementById('start-button').addEventListener('click', () => {
    storedName = currentInput;
    // Aquí debes enviar 'storedName' al servidor PHP para guardar en la base de datos
    // Puedes usar AJAX, Fetch, o cualquier otro método para hacerlo.
    // Por ejemplo, con Fetch:
    fetch('guardar_en_bd.php', {
        method: 'POST',
        body: JSON.stringify({ name: storedName }),
    })
    .then(response => {
        if (response.ok) {
            // Procesar la respuesta si es necesario
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Función para actualizar la barra de entrada
function updateInputBar() {
    document.getElementById('input-bar').innerText = currentInput;
}
// Evento de clic en el botón de empezar
document.getElementById('start-button').addEventListener('click', (event) => {
    if (currentInput.trim() === '') {
        // Mostrar el mensaje de error si no se ha ingresado un nombre
        document.getElementById('input-error').style.display = 'block';
        // Detener la acción predeterminada del botón (navegación a la siguiente página)
        event.preventDefault();
    } else {
        // Ocultar el mensaje de error si se ha ingresado un nombre
        document.getElementById('input-error').style.display = 'none';
        storedName = currentInput;
        // Aquí debes enviar 'storedName' al servidor PHP para guardar en la base de datos
        // Puedes usar AJAX, Fetch, o cualquier otro método para hacerlo.
        // Por ejemplo, con Fetch:
        fetch('guardar_en_bd.php', {
            method: 'POST',
            body: JSON.stringify({ name: storedName }),
        })
        .then(response => {
            if (response.ok) {
                // Procesar la respuesta si es necesario
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});


