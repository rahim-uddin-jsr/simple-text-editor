const textArea = document.getElementById("text-area");
document.getElementById("btn-style-bold").addEventListener("click", () => {
  //   console.log((textArea.style.fontWeight = "bold"));
  if (textArea.style.fontWeight == "bold") {
    textArea.style.fontWeight = "normal";
  } else {
    textArea.style.fontWeight = "bold";
  }
});
document.getElementById("btn-style-italic").addEventListener("click", () => {
  //   textArea.style.fontStyle = "italic";
  if (textArea.style.fontStyle == "italic") {
    textArea.style.fontStyle = "normal";
  } else {
    textArea.style.fontStyle = "italic";
  }
});
function styleToggle(property, firstValue, secondValue) {
  if (textArea.style.property == firstValue) {
    textArea.style.property = secondValue;
  } else {
    textArea.style.property = firstValue;
  }
}
document.getElementById("btn-style-underline").addEventListener("click", () => {
  if (textArea.style.textDecoration == "underline") {
    textArea.style.textDecoration = "none";
  } else {
    textArea.style.textDecoration = "underline";
  }
});
document
  .getElementById("btn-style-align-left")
  .addEventListener("click", () => {
    console.log((textArea.style.textAlign = "left"));
  });
document
  .getElementById("btn-style-align-center")
  .addEventListener("click", () => {
    console.log((textArea.style.textAlign = "center"));
  });
document
  .getElementById("btn-style-align-right")
  .addEventListener("click", () => {
    console.log((textArea.style.textAlign = "right"));
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
