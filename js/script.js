document.addEventListener("DOMContentLoaded", () => {
    const burgerBtn = document.querySelector(".burger-btn");
    const navBox = document.querySelector(".nav__box");

    burgerBtn.addEventListener("click", () => {
        navBox.classList.toggle("active"); 
    });
});
