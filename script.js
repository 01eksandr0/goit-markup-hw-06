var button = document.getElementById("myButton");
var buttonA = document.getElementById("myClose");
var buttonB = document.getElementById("myHero");
var buttonV = document.getElementById("myclos");

var element = document.getElementById("formElement");
var elamentA = document.getElementById("myElement");

button.addEventListener("click", function () {
  elementA.classList.add("is-open");
});
buttonA.addEventListener("click", function () {
  elementA.classList.remove("is-open");
});
buttonB.addEventListener("click", function () {
  formElement.classList.add("is-open");
});
buttonV.addEventListener("click", function () {
  formElement.classList.remove("is-open");
});
