document.addEventListener("DOMContentLoaded", function() {
let id = 0;
var btn = document.createElement("BUTTON");
btn.innerHTML = "Add Square";
document.body.appendChild(btn);

btn.addEventListener("click", function () {
    id++;

    let div = document.createElement("div");
    div.setAttribute("class", "myDiv");
    div.setAttribute("id", id);

    document.body.appendChild(div);
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


});

