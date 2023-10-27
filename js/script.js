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
         fetch('https://www.boredapi.com/api/activity/')
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
     
        //Creates the objects in the list 

        const createListItem = (text) => {
            // Create the elements that will appear on the list
            const listItem = document.createElement('li');
            listItem.textContent = text;
            listItem.addEventListener('click', () => {
                //console.log("Todo item clicked");
            });
    
            todoList.appendChild(listItem);
        }
    
        //listens to the click and submits the input created
        todoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputElem = document.getElementById('input');
    
            createListItem(inputElem.value);
            inputElem.value = ''; // Clear the input field
        });
    
   
      