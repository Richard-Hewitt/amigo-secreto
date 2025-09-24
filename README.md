# 🎟️ Proyecto Sorteo Amigo Secreto
Este es un proyecto web simple pero útil diseñado para realizar un sorteo aleatorio de nombres. La aplicación permite a los usuarios añadir participantes a una lista y, con un solo clic, seleccionar a uno de ellos al azar, lo que la hace ideal para rifas, juegos o cualquier situación en la que necesites elegir a una persona de un grupo de forma imparcial.

## 🚀 Características Principales
El proyecto se basa en un conjunto de funciones JavaScript que trabajan juntas para ofrecer una experiencia fluida y funcional:

  agregarAmigo(): Esta función es la primera en ejecutarse. Captura el nombre ingresado por el usuario, lo valida para asegurarse de que el campo no esté vacío y, si es válido, lo añade a un array de amigos. Al final, limpia el campo de texto y llama a otra función para actualizar la lista en pantalla.

  mostrarAmigosEnPantalla(): Se encarga de la visualización de la lista de nombres. Recorre el array de amigos y, por cada nombre, crea un nuevo elemento de lista, que se añade al HTML.
Es fundamental que primero limpie el contenido de la lista para evitar nombres duplicados.

  sortearAmigo(): Esta es la función principal del sorteo. Primero, valida que la lista no esté vacía. Luego, utiliza las funciones de JavaScript Math.random() y Math.floor() para generar un índice aleatorio y seleccionar un único nombre del array. Finalmente, muestra el nombre sorteado en la interfaz, resaltándolo con un mensaje claro.

## 🛠️ Tecnologías Utilizadas
HTML: Proporciona la estructura fundamental de la página web.

CSS: Utilizado para dar estilo a la interfaz, haciéndola intuitiva y agradable a la vista.

JavaScript: El corazón del proyecto, donde se implementó toda la lógica de las funciones descritas para manejar la entrada del usuario, la gestión del array y la lógica del sorteo.

## 💻 Cómo Usar
1.  **Ingresa un nombre**: Escribe el nombre de un participante en el campo de texto.

2.  **Añade a la lista**: Haz clic en el botón "Añadir". El nombre aparecerá en la lista de participantes debajo.

3.  **Realiza el sorteo**: Una vez que hayas agregado a todos los participantes, haz clic en el botón "Sortear amigo". El nombre del ganador se mostrará en pantalla.

### 📬 Contacto
Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto.

Autor: Richard Hewitt
