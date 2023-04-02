/*step 1: render button on screen using HTML
step 2: change button text using JS
step 3: render new button using JS (2 buttons, on with HTML other with JS)
step 4: delete button using JS (or delete all)
step 5: write functions that render button AND functions that delete buttons
step 6: use functions from step 5 to make button dissapear and create new button ON CLICK (eventlistener)
what follows are further steps based on previous meeting with Mark, included here for reference
Step 7: Make a button that when clicked generates a new list of buttons. This list of buttons is determined through a variable called arr. You can set the value of arr however way you want. but if for example it was ['button3','hello']. Then it would generate 2 new buttons 'button3' and 'hello'
Step 8: Start with 3 different buttons and then make each of them generate a new list of buttons that is unique to each one. For example if i start the application with the following buttons
Hey,
hi buddy,
Too busy today,

Then we want each on of them to generate a different list of buttons based on which one i clicked. 

Hey -> How are you, How is your day
Hi buddy -> Hey my friend, oh i have missed you
Too busy today -> sorry to hear

Step 9: Create a system that uses objects to describe to our code the flow of buttons. This needs not to abide by any standard, as long as its easy to add more buttons that go to other buttons thats the goal. 


*/

var element = document.getElementById("buttons");
element.addEventListener("click",() => {createButton1(); deleteButton()}, false);

const buttonFlow1 = ['button1','button2','button3']; 


function createButton1() {
  
    for (var i = 0; i < buttonFlow1.length; i++) { 

    var button = document.createElement('BUTTON');    
    var text = document.createTextNode(buttonFlow1[i]);     
    button.appendChild(text);    
    document.body.appendChild(button); 
    }
};






 function deleteButton() {
    document.getElementById("buttons").remove();
 };
    
