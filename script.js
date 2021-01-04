var div = document.getElementById('container');

//Maakt buttons aan via JS
var btn1 = document.createElement('BUTTON');
var btn2 = document.createElement('BUTTON');
var btn3 = document.createElement('BUTTON');

btn1.innerHTML = "Button 1";
btn2.innerHTML = "Button 2";
btn3.innerHTML = "Button 3";

//Zet de buttons in de div
div.appendChild(btn1);
div.appendChild(btn2);
div.appendChild(btn3);

//Styling
btn1.style.backgroundColor = "#008000";
btn2.style.backgroundColor = "#FF0000";
btn3.style.backgroundColor = "#0000FF";

//Events
btn1.addEventListener("click", function() {
    document.body.style.backgroundColor = "#008000";
});

btn2.addEventListener("click", function() {
    document.body.style.backgroundColor = "#FF0000";
});

btn3.addEventListener("click", function() {
    document.body.style.backgroundColor = "#0000FF"; 
});