document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector("#menu");
    const nav = document.querySelector(".links");

    if (menu && nav) {
        menu.onclick = () => {
            console.log("Menu clicked");
            menu.classList.toggle('fa-bars');
            menu.classList.toggle('fa-times');
            nav.classList.toggle('active');
        };
    } else {
        console.error("Menu or nav element not found");
    }
});
