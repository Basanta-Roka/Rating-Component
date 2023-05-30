let form1 = document.querySelector(".Rating-Form");
let form2 = document.querySelector(".Thankyou-Form");
const rating = document.getElementById("selected-rate");
const rates = document.querySelectorAll(".button");

function showOne() {
    form1.style.display = "none";
    form2.style.display = "flex";
}

function showTwo() {
    form1.style.display = "flex";
    form2.style.display = "none";
}

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    })
})
