const buttonElement = document.getElementById('button');
const listElement = document.getElementById('list');
let cont = listElement.children.length;

/* Variables ejercicio 2 */
const containerRange = document.getElementById('container-range');
const generateButtonElement = document.getElementById('generate-button');
const inputRangeElement = document.getElementById('range');
const numberLabel = document.getElementById('number-label');

/* Variables ejercicio 3 */
const sendButtonElement = document.getElementById('send-button');
const mainContainer = document.getElementById('main-container');
const form = document.getElementById('form');

/* Variables ejercicio 4  */

/* Ejercicio 1 */

buttonElement.addEventListener('click', () => {
  cont++;
  const liElement = document.createElement('li');
  liElement.textContent = `Item ${cont}`;
  listElement.append(liElement);
});

/* Ejercicio 2 */
let headerNumber;
const generateHeader = () => {
  if (!headerNumber) return;
  const header = document.createElement(`h${headerNumber}`);
  header.textContent = `
  I'm a header ${headerNumber}`;
  containerRange.append(header);
};

inputRangeElement.addEventListener('input', e => {
  numberLabel.textContent = e.target.value;
  headerNumber = e.target.value;
});

generateButtonElement.addEventListener('click', generateHeader);

/* Ejercicio 3 */
const genertatePost = (author, message) => {
  const newDiv = document.createElement('div');

  const newAuthor = document.createElement('span');
  newAuthor.textContent = author;

  const newMessage = document.createElement('p');
  newMessage.textContent = message;

  newDiv.append(newAuthor, newMessage);
  mainContainer.append(newDiv);
};

form.addEventListener('submit', e => {
  e.preventDefault();

  const author = e.target.author.value;
  const message = e.target.message.value;

  genertatePost(author, message);

  form.reset();
});

/* Ejercicio 4 */
const changeBackground = (color, newDiv) => {
  if (color === 'red') {
    newDiv.classList.remove('green');
  } else {
    newDiv.classList.remove('red');
  }
  newDiv.classList.add(color);
};

const generateContainerButtons = () => {
  const newDiv = document.createElement('div');

  const buttonRed = document.createElement('button');
  buttonRed.textContent = 'Red';
  buttonRed.addEventListener('click', () => changeBackground('red', newDiv));

  const buttonGreen = document.createElement('button');
  buttonGreen.textContent = 'Green';
  buttonGreen.addEventListener('click', () =>
    changeBackground('green', newDiv)
  );

  newDiv.append(buttonRed, buttonGreen);
  document.body.append(newDiv);
};

generateContainerButtons();

/* INSERCIÓN MÚLTIPLE */

/* Ejercicio 1 y 2*/
const randomNumber = () => {
  const numbersArray = [];
  for (let i = 0; i < 25; i++) {
    const number = Math.floor(Math.random() * 50);
    numbersArray.push(number);
  }
  return numbersArray;
};

const evenOddList = () => {
  const numbersArray = randomNumber();
  const fragment = document.createDocumentFragment();
  const listEven = document.createElement('ul');
  const listOdd = document.createElement('ul');

  for (const number of numbersArray) {
    const listItem = document.createElement('li');
    listItem.textContent = number;
    if (number % 2 === 0) {
      listEven.append(listItem);
    } else {
      listOdd.append(listItem);
    }
  }
  fragment.append(listEven, listOdd);
  document.body.append(fragment);
};

evenOddList();

/* Ejercicio 3 */
const containerList = document.getElementById('container-list');
const inputElement = document.getElementById('input');
const regexVowels = /[aeiouáéíóú]/;

const generateTextInfo = () => {
  containerList.innerHTML = '';
  const inputValue = inputElement.value;
  const characters = inputValue.length;

  const fragment = document.createDocumentFragment();
  const listItemCharacters = document.createElement('li');
  const listItemVowels = document.createElement('li');
  const listItemConsonants = document.createElement('li');
  const listItemSpaces = document.createElement('li');

  let vowels = 0;
  let consonants = 0;
  let spaces = 0;

  for (const letter of inputValue) {
    if (regexVowels.test(letter)) {
      vowels++;
    } else if (letter === ' ') {
      spaces++;
    } else {
      consonants++;
    }
  }
  listItemCharacters.textContent = `El texto tiene ${characters} caracteres`;
  listItemVowels.textContent = `El texto tiene ${vowels} vocales`;
  listItemConsonants.textContent = `El texto tiene ${consonants} consonantes`;
  listItemSpaces.textContent = `El texto tiene ${spaces} espacios`;
  fragment.append(
    listItemCharacters,
    listItemVowels,
    listItemConsonants,
    listItemSpaces
  );
  containerList.append(fragment);
};
generateTextInfo();

inputElement.addEventListener('input', generateTextInfo);

/* Ejercicio 4 */
const inputNumberElement = document.getElementById('input-number');
const regexNumbers = /[0-9]/;
const buttonMultiply = document.getElementById('button-multiply');

const multiplyList = document.getElementById('multiply-list');

let inputValueNumber;

const setButtonStatus = () => {
  multiplyList.innerHTML = ' ';
  inputValueNumber = Number(inputNumberElement.value);
  if (!regexNumbers.test(inputValueNumber) || inputValueNumber <= 0) {
    buttonMultiply.disabled = true;
    return;
  }
  buttonMultiply.disabled = false;
};

const multiplicationTable = () => {
  multiplyList.innerHTML = ' ';
  const fragment = document.createDocumentFragment();
  for (let i = 0; i <= 10; i++) {
    const liItem = document.createElement('li');

    liItem.textContent = `${inputValueNumber} X ${i} = ${inputValueNumber * i}`;

    fragment.append(liItem);
  }
  multiplyList.append(fragment);
};

buttonMultiply.addEventListener('click', multiplicationTable);
inputNumberElement.addEventListener('input', setButtonStatus);

/* Ejercicio 5 */
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
    profileImage: 'https://randomuser.me/api/portraits/men/9.jpg'
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
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    name: 'Jorge Cedillo',
    age: 33,
    username: 'Jorge_Cedillo',
    email: 'Jorge.Cedillo2@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/88.jpg'
  }
];

const fragment = document.createDocumentFragment();

const generateCards = () => {
  USERS.forEach(user => {
    const divCard = document.createElement('div');

    const imageCard = document.createElement('img');
    imageCard.src = user.profileImage;
    divCard.append(imageCard);

    const nameCard = document.createElement('p');
    nameCard.textContent = `Name: ${user.name}`;
    divCard.append(nameCard);

    const ageCard = document.createElement('p');
    ageCard.textContent = `Age: ${user.age}`;
    divCard.append(ageCard);

    const userNameCard = document.createElement('p');
    userNameCard.textContent = `Username: ${user.username}`;
    divCard.append(userNameCard);

    const emailCard = document.createElement('p');
    emailCard.textContent = `Email: ${user.email}`;
    divCard.append(emailCard);

    fragment.append(divCard);
  });
  document.body.append(fragment);
};

generateCards();
