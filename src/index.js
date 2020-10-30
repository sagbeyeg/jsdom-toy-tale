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
    .then(data => renderAllToys(data));
  }

  init()

  //renderAllToys function
    //iterate through toys

  function renderAllToys (data) {
    data.forEach(toy => renderOneToy(toy)
      // console.log(toy)
    )
  }
  //renderOneToy function
      //grabs renderAllToys
      //ADD TOY INFO TO THE CARD: pushes into <div class="card">
        //h2 tag with the toy's name
        // img tag with the src of the toy's image attribute and the class name "toy-avatar"
        // p tag with how many likes that toy has
        // button tag with a class "like-btn"

  const container = document.querySelector('#toy-collection')

  function renderOneToy (toy) {
    const card = document.createElement('div')
    card.className = 'card'
      card.forEach() {

      }
    container.append(card)
  }

//ADD A NEW TOY
  //POST REQUEST to http://localhost:3000/toys
  //method: POST for FETCH
  //var for stringify -> defined in our renderOneToy
  
//INCREASE TOY'S LIKES
  //increaseToyLikes function (e) {}
    //find the toy connected to button by id -> var toy
    //the toy's like button -> var like
    //current likes -> like.innerHTML
    //new likes -> like.innerHTML + 1

  //PATCH request to http://localhost:3000/toys

  //event listener for like button pass increaseToyLikes as 2nd argument

