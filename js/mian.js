var elSiteForm = document.querySelector(".form-box");
var elSiteInput = document.querySelector("#current-money");
var elBtn = document.querySelector("#btn-js");
var elSelect = document.querySelector("#valyuta-select");
var elMessage = document.querySelector(".message");


elSiteForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var inputValue = parseFloat(elSiteInput.value, 10);

    elMessage.textContent = inputValue * elSelect.value + " so'm" ;
})

// console.log(elMessage.textContent);