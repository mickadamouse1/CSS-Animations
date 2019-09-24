console.log("brans");

var btnGo = document.getElementById("go");
var txtBox = document.getElementById("txtBox");
var txtName = document.getElementById("txtName");
var box = document.getElementById("box");

btnGo.onclick = function() {
  if (box.style.width === "40rem") {
    Object.assign(box.style, {
      width: "18rem",
      height: "18rem"
    });
    txtName.style.display = "block";
    txtBox.style.justifyContent = "center";
    txtBox.style.alignItems = "center";
  } else {
    box.style.width = "40rem";
    box.style.height = "28rem";
    txtBox.style.justifyContent = "flex-end";
    txtBox.style.alignItems = "flex-end";
    txtName.style.opacity = 0;
  }
}
