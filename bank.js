const btnSort = document.querySelector(".dropdown-filter");
const cardSort = document.querySelector(".sort");
const cardsBank = document.querySelector(".cards")
const bank = Array.from(document.querySelectorAll(".bank"))
const max = document.querySelector("#max")
const min = document.querySelector("#min")

btnSort.addEventListener("click", Block)

function Block(){
    if (cardSort.style.display === 'none'){
        cardSort.style.display = 'block'
    }
    else{
        cardSort.style.display = 'none'
    }
}


min.addEventListener("click", () => {
    bank.sort((a, b) => a.dataset.summ - b.dataset.summ);
    cardsBank.innerHTML = "";
    bank.forEach(card => cardsBank.appendChild(card));
});

max.addEventListener("click", () => {
    bank.sort((a, b) => b.dataset.summ - a.dataset.summ);
    cardsBank.innerHTML = "";
    bank.forEach(card => cardsBank.appendChild(card));
});