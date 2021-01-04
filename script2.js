var div = document.getElementById('container');
var btn;
var i = 0;
//Buttons
for(i = 1; i < 31; i++) {
    buttonMaker();
};
function buttonMaker(btn) {
    btn = document.createElement('BUTTON');
    btn.setAttribute("id", ("btn" + i))
    btn.innerHTML = i;
    div.appendChild(btn);
};

btn.addEventListener("click", function() {
    btn.style.backgroundColor = "red";
});