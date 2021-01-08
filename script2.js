var div = document.getElementById('container');
var colors = ["green" ,"red", "purple", "blue", "black"];

for(let i = 1; i <= 30; i++) {
    var btn = document.createElement('BUTTON');
    btn.style.backgroundColor = colors[0];
    btn.id = "btn" + i;
    btn.innerHTML = i;
    div.appendChild(btn);
    btn.addEventListener("click", function() {
        btnColor(this);
    });
};

function btnColor(currentBtn){
    if(currentBtn.style.backgroundColor == colors[0]) {
        currentBtn.style.backgroundColor = colors[1];
    }
    else if(currentBtn.style.backgroundColor == colors[1]) {
        currentBtn.style.backgroundColor = colors[2];
    }
    else if(currentBtn.style.backgroundColor == colors[2]) {
        currentBtn.style.backgroundColor = colors[3];
    }
    else if(currentBtn.style.backgroundColor == colors[3]) {
        currentBtn.style.backgroundColor = colors[4];
    }
    else if(currentBtn.style.backgroundColor == colors[4]) {
        currentBtn.remove();
    };
};