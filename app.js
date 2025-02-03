let nombres = [];

function agregarNombre() {
    const input = document.getElementById('nombre');
    const nombre = input.value.trim();
    if (nombre !== "" && !nombres.includes(nombre)) {
        nombres.push(nombre);
        actualizarLista();
        input.value = "";
    }
}

function actualizarLista() {
    const lista = document.getElementById('listaNombres');
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("Debes agregar los nombres antes de jugar");
        return;
    }
    if (nombres.length > 1) {
        const indice = Math.floor(Math.random() * nombres.length);
        document.getElementById('resultado').textContent = `El amigo secreto es: ${nombres[indice]}`;
    } else {
        document.getElementById('resultado').textContent = "Agrega al menos dos nombres para sortear.";
    }
}

function reiniciarJuego() {
    nombres = [];
    actualizarLista();
    document.getElementById('resultado').textContent = "";
    document.getElementById('nombre').value = "";
}
