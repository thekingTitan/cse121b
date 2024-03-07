/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName= 'Emmanuel Igwe';
let currentYear= new Date().getFullYear();
let profilePicture= 'images/my-pic.jpg';



/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement= document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);








/* Step 5 - Array */
let favoriteFood = ['rice', 'beans', 'egg', 'noodles', 'chicken'];
foodElement.innerHTML = favoriteFood.join('<br>');
let newFavoriteFood = 'ice cream';
favoriteFood.push(newFavoriteFood);
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood.join('<br>')}`;
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood.join('<br>')}`;






