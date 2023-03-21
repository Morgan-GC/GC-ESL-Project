/*step 1: render button on screen using HTML
step 2: change button text using JS
step 3: render new button using JS (2 buttons, on with HTML other with JS)
step 4: delete button using JS (or delete all)
step 5: write functions that render button AND functions that delete buttons
step 6: use functions from step 5 to make button dissapear and create new button ON CLICK (eventlistener)
*/

function createButton() {
    var myDiv = document.getElementById("newButton");    
    var button = document.createElement('BUTTON');    
    var text = document.createTextNode("create");     
    button.appendChild(text);    
    myDiv.appendChild(button); ;
    }