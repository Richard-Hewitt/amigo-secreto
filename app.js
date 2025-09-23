// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar la lista de amigos
let amigos = []; // Array global para almacenar los nombres de los amigos

function agregarAmigo() {
  const nombreInput = document.getElementById('amigo');
  const nombre = nombreInput.value.trim();

  // Validar que el campo no esté vacío
  if (nombre === '') {
    alert('Por favor, inserte un nombre.');
    return;
  }

  // Actualizar el array de amigos y limpiar el campo de entrada
  amigos.push(nombre);
  nombreInput.value = '';

  // Actualizar la lista en la interfaz
  mostrarAmigosEnPantalla();
}

function mostrarAmigosEnPantalla() {
  const listaAmigos = document.getElementById('listaAmigos');

  // Limpiar la lista existente para evitar duplicados
  listaAmigos.innerHTML = '';

  // Iterar sobre el array y agregar cada nombre a la lista HTML
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  const resultado = document.getElementById('resultado');

  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert('No hay nombres para sortear. Por favor, agregue al menos uno.');
    resultado.innerHTML = ''; // Limpiar el resultado anterior
    return;
  }

  // Generar un índice aleatorio y obtener el nombre sorteado
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en pantalla
  resultado.innerHTML = `El amigo sorteado es: **${amigoSorteado}**`;
}