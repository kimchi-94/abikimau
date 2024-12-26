document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector("#menu");
    const nav = document.querySelector(".links");

    const handleResize = () => {
        if (window.innerWidth > 968) {
            // Reset menu state when resizing to larger screens
            nav.classList.remove("active");
            menu.classList.remove("fa-times");
            menu.classList.add("fa-bars");
        }
    };

    if (menu && nav) {
        menu.onclick = () => {
            menu.classList.toggle("fa-bars");
            menu.classList.toggle("fa-times");
            nav.classList.toggle("active");
        };

        // Listen for resize events
        window.addEventListener("resize", handleResize);
    } else {
        console.error("Menu or nav element not found");
    }
});
