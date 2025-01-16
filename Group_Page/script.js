let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".thumbnail .item");

// Config parameters
let countItem = items.length;
let itemActive = 0;

// Event: Next click
next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
};

// Event: Prev click
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
};

//This part of the code activates the automatic slider carousel

//auto run slider
//let refreshInterval = setInterval(() => {
//    next.click();
//}, 5000)

// Function to update the slider
function showSlider() {
    // Remove active class from the old item
    let itemActiveOld = document.querySelector(".slider .list .item.active");
    let thumbnailActiveOld = document.querySelector(".thumbnail .item.active");
    if (itemActiveOld) itemActiveOld.classList.remove("active");
    if (thumbnailActiveOld) thumbnailActiveOld.classList.remove("active");

    // Add active class to the new item
    items[itemActive].classList.add("active");
    thumbnails[itemActive].classList.add("active");

 //This part of the code declares the time between the change of slides
    //clear auto time run slider
   // clearInterval(refreshInterval);
    //refreshInterval = setInterval(() => {
     //   next.click();
   // }, 5000)

}

// Click thumbnails to navigate
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", function () {
        itemActive = index;
        showSlider();
    });
});