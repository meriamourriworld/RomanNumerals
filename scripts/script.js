let btnConvert = document.querySelector(".btnConvert");
let error = document.querySelector(".error");
let nbInput = document.querySelector("#nb");

btnConvert.addEventListener("click", ()=>
{
    let nb = parseInt(nbInput.value);
    if(isNaN(nb) || nb < 1 || nb > 1000)
    {
        error.textContent = "Please type a number between 1 and 1000";
        nbInput.value = "";
        nbInput.focus();
        error.style.display = "block";
    }else
    {
        error.style.display = "none";

    }


});