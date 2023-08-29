let prevScrollPos = window.pageYOffset;
const header = document.querySelector(".header");
const rowUp = document.querySelector(".main-row-up");

window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 0) {
        header.classList.add("scrolled");
        rowUp.classList.remove("main-rup-hide");
    } else {
        header.classList.remove("scrolled");
        rowUp.classList.add("main-rup-hide");
    }

    prevScrollPos = currentScrollPos;
});
