let numberOfProduct = document.querySelector(".button__addToCart--number");
let btnMinus = document.querySelector(".button__addToCart--minus");
let btnPlus = document.querySelector(".button__addToCart--plus");
let numberToChange;

console.log(numberToChange);

btnMinus.addEventListener("click", e=>{
    numberToChange = numberOfProduct.value;
    if(numberToChange > 1){
    numberOfProduct.value = numberToChange -1;
    }
})
btnPlus.addEventListener("click", e=>{
    numberToChange = numberOfProduct.value;
    numberOfProduct.value = parseInt(numberToChange) +1;
})