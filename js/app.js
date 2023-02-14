const textArea = document.getElementById("text-area");
const boldBtn = document.getElementById("btn-style-bold");
boldBtn.addEventListener("click", (e) => {
  //   console.log((textArea.style.fontWeight = "bold"));
  if (textArea.style.fontWeight == "bold") {
    textArea.style.fontWeight = "normal";
    boldBtn.style.border = "none";
  } else {
    textArea.style.fontWeight = "bold";
    boldBtn.style.border = "2px solid #ddd";
  }
});
const italicBtn = document.getElementById("btn-style-italic");
italicBtn.addEventListener("click", () => {
  //   textArea.style.fontStyle = "italic";
  if (textArea.style.fontStyle == "italic") {
    textArea.style.fontStyle = "normal";
    italicBtn.style.border = "none";
  } else {
    textArea.style.fontStyle = "italic";
    italicBtn.style.border = "2px solid #ddd";
  }
});
function styleToggle(property, firstValue, secondValue) {
  if (textArea.style.property == firstValue) {
    textArea.style.property = secondValue;
  } else {
    textArea.style.property = firstValue;
  }
}
const btnUnderLine = document.getElementById("btn-style-underline");
btnUnderLine.addEventListener("click", () => {
  if (textArea.style.textDecoration == "underline") {
    textArea.style.textDecoration = "none";
    btnUnderLine.style.border = "none";
  } else {
    textArea.style.textDecoration = "underline";
    btnUnderLine.style.border = "2px solid #ddd";
  }
});
const btnLeft = document.getElementById("btn-style-align-left");
btnLeft.addEventListener("click", () => {
  textArea.style.textAlign = "left";
});
const btnCenter = document.getElementById("btn-style-align-center");
btnCenter.addEventListener("click", () => {
  textArea.style.textAlign = "center";
});
const btnRight = document.getElementById("btn-style-align-right");
btnRight.addEventListener("click", () => {
  textArea.style.textAlign = "right";
});
function changeSize() {
  console.log("changed");
  const fontSize = document.getElementById("font-size").value;
  textArea.style.fontSize = fontSize + "px";
}
const colorInputFelid = document.getElementById("color");
colorInputFelid.addEventListener("input", () => {
  textArea.style.color = colorInputFelid.value;
});

// document.getElementById("font-size").addEventListener("onchange", () => {
//   console.log("clicked");
//   const fontSize = document.getElementById("font-size").value;
//   textArea.style.fontSize = fontSize + "px";
// });

// function setStyle(btnId, style) {
//   document.getElementById(btnId).addEventListener("click", () => {
//     console.log(textArea.style.style);
//   });
// }
// setStyle("btn-style-bold", "fontWeight = 'bold'");
