console.log("brans");

var btnGo = document.getElementById("linkGo");
var txtBox = document.getElementById("txtBox");
var txtName = document.getElementById("txtName");
var box = document.getElementById("box");
var appImage = document.getElementById("bkgdBox");
var txtInfo = document.getElementById("txtInfo");

btnGo.onclick = function() {
    toggleAppClass(box);
    toggleAppClass(txtName);
    toggleAppClass(txtBox);
    toggleAppClass(btnGo);
    toggleAppClass(appImage);
    toggleAppClass(txtInfo);
}

function toggleAppClass(element) {
  var x = element.classList[0];
  x = x.split("-");
  x = x[1];
  i = element.id;
  if (x === "small") {
    btnGo.innerHTML = "x";
    element.classList.toggle(`${i}-small`);
    element.classList.toggle(`${i}-large`);
  } else {
    btnGo.innerHTML = "Go";
    element.classList.toggle(`${i}-large`);
    element.classList.toggle(`${i}-small`);
  }
}
