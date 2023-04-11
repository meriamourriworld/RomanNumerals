//Get the roman number Algorithm
const mainRoman = 
{
  1 : "I",
  4 : "IV",
  5 : "V",
  9 : "IX",
  10 : "X",
  40 : "XL",
  50 : "L",
  90 : "XC",
  100 : "C",
  400 : "CD",
  500 : "D",
  900 : "CM",
  1000 : "M"
}
function convertToRoman(num) {
let romanNb = "", index = 0;
const stringNum = num.toString();
if(mainRoman.hasOwnProperty(stringNum)){return mainRoman[stringNum];}
else
{
  for(let i = stringNum.length ; i > 0; i--, index++)
  {
    romanNb += romanByUnit(stringNum[index], i);
  }
}
return romanNb;
}

function romanByUnit(index, length)
{
let base,found=false;
let romanArr = [];

//Store the range of nb with the same length
for(let key in mainRoman)
{
  if(key.length == length){romanArr.push(key);}
}
//Find the Base
for(let i = 0; i < romanArr.length; i++)
{
  //IF Found in the selected array
  if(romanArr[i][0] == index)
  {
    found = true;
    base =  mainRoman[romanArr[i]];
  }else
    if(found === false)
    {
      {
      //IF NOT Found in the selected array
      // IF index<5  => BASE = repeat(min(romanArr), index Times)
      // IF index>5  => BASE = roman(5) + repeat(min(romanArr), index - 5 Times )
        if(index < 5)
        {
          base = mainRoman[Math.min(...romanArr)].repeat(index)
        }if(index > 5)
        {
          base = mainRoman[romanArr[2]] + mainRoman[Math.min(...romanArr)].repeat(index - 5);
        }
      }
    }
}
return base;
}


//Manipulating UI Elements
let btnConvert = document.querySelector(".btnConvert");
let error = document.querySelector(".error");
let result = document.querySelector(".resultText");
let nbInput = document.querySelector("#nb");
let btnCopy = document.querySelector(".copy");
let btnDelete = document.querySelector(".delete");

btnConvert.addEventListener("click", ()=>
{
    btnCopy.style.color = "#FFFFFF";
    let nb = parseInt(nbInput.value);
    if(isNaN(nb) || nb < 1 || nb > 1000)
    {
        error.textContent = "Please type a number between 1 and 1000";
        nbInput.value = "";
        nbInput.focus();
        error.style.display = "block";
        result.textContent = "";
        result.parentElement.style.borderColor = "white";
    }else
    {
        error.style.display = "none";
        result.textContent = convertToRoman(nb);
        result.parentElement.style.border = "2px solid #2180E4";
    }
});

btnCopy.addEventListener("click",(e)=>
{
    btnCopy.style.color = "#2180E4";
    navigator.clipboard.writeText(result.textContent);
});

btnDelete.addEventListener("click", ()=>
{
    nbInput.value = "";
    result.textContent = "";
    nbInput.focus();
    btnCopy.style.color = "#FFFFFF";
})