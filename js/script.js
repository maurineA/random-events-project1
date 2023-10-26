let activity = [];
let listItem = []
let todoForm = document.querySelector('form');
let todoList = document.querySelector('.todo-list');
//check if the DOM is completed loaded
document.addEventListener(`DOMContentLoaded`, ()=>{
    
   
   
})

//The event listens to the click and fetches events
let btn = document.getElementById('mybutton')
btn.addEventListener('click', ()=> {
    getEvents();
    //alert('clicked')
    

})

// Add a click event listener to the button

function getEvents(){
    // mybutton.addEventListener('button', (click) => {
         fetch('http://www.boredapi.com/api/activity/')
         .then(res => res.json())
         .then(data => {
             //console.log(data)

               //display the fetched data from the public API to the DOM
              
               let eventList=document.getElementById('eventList')
               let newLi = document.createElement('li')
               newLi.innerText= data.activity
               eventList.appendChild(newLi)
 
             
 
         });
     }
     