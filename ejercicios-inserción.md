# Ejercicios

## Inserción de elementos en el DOM

- Usando cualquiera de los tres HTML que te doy, haz que al hacer click en el botón se vayan añadiendo items con el texto Item 1, Item 2, Item 3,... Los item deben llevar el número correspondiente independiente de qué HTML hayas elegido

```html
<button>Añadir Elementos</button>
<ul>
  <li>Item 1</li>
</ul>
```

```html
<button>Añadir Elementos</button>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

```html
<button>Añadir Elementos</button>
<ul></ul>
```

- Usando el input range que te doy haz un generador de encabezados. El input te permite seleccionar un número del 1 al 6, en función de cual elijas ser generará un encabezado con la etiqueta correspondiente. Si elijes un 3, al hacer click en el botón se generará un h3, si elijes un 5 un h5 y así para todos.

```html
<div>
  <label>1</label>
  <input type="range" id="range" min="1" max="6" step="1" value="1" />
  <button>Generar Encabezado</button>
</div>
```

- Haz un simulador de posts, con este HTML tienes que conseguir que se añada un post con su autor y el texto que hayas escrito dentro del contenedor de posts. Cada post debe ir dentro de un div independiente.

```html
<h1>Posts</h1>
<h2>Post de ejemplo</h2>
<!-- Contenedor de posts -->
<div>
  <!-- Post independiente -->
  <div>
    <span>Author: Dorian</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
  <!-- Fin del post independiente -->
</div>
<!-- Fin del contenedor de posts -->
<form>
  <div>
    <label>Author</label>
    <input type="text" />
  </div>
  <div>
    <label>Message:</label>
    <textarea></textarea>
  </div>
  <button>Send Post</button>
</form>
```

- Crea una función que genere un div con dos botones dentro. Un botón tendrá el texto 'red' y el otro el texto 'green', al hacer click en los botones debe cambiar el background-color del div al color que corresponda.

## Inserción múltiple

- Crea una función que sea capaz de generar 25 números aleatorios y los devuelva.

- Crea una función que reciba los 25 números aleatorios que has creado en el ejercicio anterior y genere e inserte en el DOM 2 listas, una con números pares y otra con números impares.

- Con esta estructura, crea una función que, a medida que vayas escribiendo, te ponga dentro de la lista:
  - El texto tiene X caracteres.
  - El texto tiene X vocales.
  - El texto tiene X consonantes.
  - Has introducido X espacios

```html
<div>
  <input type="text" />
  <ul></ul>
</div>
```

- Con este HTML consigue que al introducir un número POSITIVO y MAYOR de 0 se genere la tabla de multiplicar de ese número del 0 al 10 como elementos de la lista. En el caso de que el número no sea correcto o no haya número, el botón estará desactivado.

```html
<label>Introduce un número</label>
<input type="number" />
<button>Imprimir tabla de multiplicar</button>
<ul></ul>
```

- Con este objeto debes crear tarjetas de usuario que muestren todos los datos, el diseño es libre, lo importante es que muestren toda la información del usuario y la imagen de perfil. Crea una función que genere todas las tarjetas de usuario y las inserte en el DOM

```js
const USERS = [
  {
    name: 'Josep Flores',
    age: 77,
    username: 'Josep85',
    email: 'Josep_Flores@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/women/24.jpg'
  },
  {
    name: 'Ricardo Rosas',
    age: 43,
    username: 'Ricardo_Rosas',
    email: 'Ricardo_Rosas22@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/57.jpg'
  },
  {
    name: 'Iván Tamayo',
    age: 40,
    username: 'tamayo87',
    email: 'Ivan_Tamayo61@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/9.jpg',
    job: 'Lead Communications Designer'
  },
  {
    name: 'Maica Villanueva',
    age: 64,
    username: 'Maica.Villanueva18',
    email: 'Maica.Villanueva1@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    name: 'Pedro Estrada',
    age: 77,
    username: 'Pedro29',
    email: 'Pedro_Estrada22@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
    job: 'Central Directives Liaison'
  },
  {
    name: 'Jorge Cedillo',
    age: 33,
    username: 'Jorge_Cedillo',
    email: 'Jorge.Cedillo2@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/88.jpg'
  }
];
```
