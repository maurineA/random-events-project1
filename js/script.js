let activity = [];
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
             console.log(data)
           
 
             
 
         });
     }





