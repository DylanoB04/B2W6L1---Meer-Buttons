var div = document.getElementById('container');
var btn;
var i = 0;
var colors = ["green", "purple", "blue", "black"];

for(i = 1; i < 31; i++) {
    buttonMaker();
    btn.addEventListener("click", function() {
        this.style.backgroundColor = "red";
    });
};

function buttonMaker() {
    btn = document.createElement('BUTTON');
    btn.style.backgroundColor = "#008000";
    btn.setAttribute("id", ("btn" + i))
    btn.innerHTML = i;
    div.appendChild(btn);
};