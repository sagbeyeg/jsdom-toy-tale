let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


// GET our toy data from http://localhost:3000/toys; FETCH
  // put in an init function

  function init () {
    fetch('http://localhost:3000/toys')
    .then(response => response.json())  
    .then(toyData => renderAllToys(toyData));
  }

  init()

  //renderAllToys function
    //iterate through toys

  function renderAllToys (toyData) {
    toyData.forEach(toy => renderOneToy(toy))
  }
  //renderOneToy function
      //grabs renderAllToys
      //ADD TOY INFO TO THE CARD: pushes into  class="card">
        //h2 tag with the toy's name
        // img tag with the src of the toy's image attribute and the class name "toy-avatar"
        // p tag with how many likes that toy has 
        // button tag with a class "like-btn"



  function renderOneToy (toyObject) {
   
    const card = document.createElement('div')
    card.className = 'card'
    card.dataset.id = toyObject.id
    card.innerHTML = `
      <h2>
      ${toyObject.name}
      </h2>

      <img class="toy-avatar" src="${toyObject.image}" alt="${toyObject.name}">

      <p>${toyObject.likes} likes</p>
      
      
      <button class="like-btn">Like</button>
    `
      
    container.append(card)
  }

//ADD A NEW TOY
  //POST REQUEST to http://localhost:3000/toys
  //method: POST for FETCH
  //var for stringify -> defined in our renderOneToy
  const formData = document.querySelector('.add-toy-form')
  formData.addEventListener("submit", addNewToy)

  function addNewToy (event) {
    event.preventDefault

    const toyObj = {
      name: event.target.name.value,
      image: event.target.image.value,
      likes: 0
    }

    
    let configObj = {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(toyObj)
    }
  
  
    fetch('http://localhost:3000/toys', configObj)
    .then(resp => {
      resp.json()
      debugger
    })
    .then(function (obj) {
       console.log(obj)
    })
  }
  
//INCREASE TOY'S LIKES
  //increaseToyLikes function (e) {}
    //find the toy connected to button by id -> var toy
    //the toy's like button -> var like
    //current likes -> like.innerHTML
    //new likes -> like.innerHTML + 1

  //PATCH request to http://localhost:3000/toys

  //event listener for like button pass increaseToyLikes as 2nd argument

  const container = document.querySelector('#toy-collection')
  container.addEventListener("click", increaseToyLikes)
  
  function increaseToyLikes(event) {
    // console.log(event.target)
    if (event.target.matches('.like-btn')) {
      //card parent
      const card = event.target.closest('.card')
      //card id
      const id = card.dataset.id
      console.log(id)
      //card likes
      

      // const likesP = card.getElementsByTagName('p')
      // console.log(likesP)
      //  const newLikes = Array.from(likesP)
      // // parseInt(likesP.textContent) + 1
      //   console.log(newLikes)

      //   const text = newLikes.innerText
      //   console.log(text)
      
    }
  }


