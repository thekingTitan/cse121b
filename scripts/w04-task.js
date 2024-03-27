/* LESSON 3 - Programming Tasks */

let myProfile = {
    name: "Emmanuel Igwe",
    photo: "images/my-pic.jpg",
    favoriteFoods: [
      'Rice',
      'Bread',
      'Spaghetti',
      'FuFu and Vegetables',
      'Pounded Yam and egusi'
    ],
    hobbies: [
      'Reading',
      'seeing a movie',
      'Trying out new things'
    ],
    placesLived: []
  };
  
  // Add places lived
  myProfile.placesLived.push(
    {
      place: 'Lagos, Nigeria',
      length: 'since Birth'
    }
  );
  
  // Additional places lived
  myProfile.placesLived.push(
    {
      place: 'Ogun state, Nigeria',
      length: '4 years'
    }
  );
  
  // Output to DOM
  document.querySelector('#name').textContent = myProfile.name;
  
  let photoElement = document.querySelector('#photo');
  photoElement.setAttribute('src', myProfile.photo);
  photoElement.setAttribute('alt', myProfile.name);
  
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });
  
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    let dl = document.querySelector('#places-lived');
    dl.appendChild(dt);
    dl.appendChild(dd);
  });
  

