// JavaScript for the Website Flow

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for Navbar links
    const navbarLinks = document.querySelectorAll(".navbar a");
    navbarLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  
    // Loading screen functionality
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.querySelector(".main-content");
  
    setTimeout(() => {
      loadingScreen.style.opacity = "0";
      loadingScreen.style.pointerEvents = "none";
      mainContent.style.opacity = "1";
      mainContent.style.transition = "opacity 1s ease-in-out";
    }, 3000); // Adjust delay as needed
  
    // Hover effects for Individual Exhibition cards
    const cards = document.querySelectorAll(".student-card");
    cards.forEach(card => {
      const overlay = card.querySelector(".card-img-overlay");
  
      card.addEventListener("mouseenter", () => {
        overlay.classList.remove("hidden");
      });
  
      card.addEventListener("mouseleave", () => {
        overlay.classList.add("hidden");
      });
  
      // Click to open a side popup with project details
      card.addEventListener("click", () => {
        const artistId = card.dataset.artistId;
        openPopup(artistId);
      });
    });
  
    // Carousel functionality for sponsors section
    const sponsorsContainer = document.querySelector(".sponsors-container");
    let isDown = false;
    let startX;
    let scrollLeft;
  
    sponsorsContainer.addEventListener("mousedown", e => {
      isDown = true;
      sponsorsContainer.classList.add("active");
      startX = e.pageX - sponsorsContainer.offsetLeft;
      scrollLeft = sponsorsContainer.scrollLeft;
    });
  
    sponsorsContainer.addEventListener("mouseleave", () => {
      isDown = false;
      sponsorsContainer.classList.remove("active");
    });
  
    sponsorsContainer.addEventListener("mouseup", () => {
      isDown = false;
      sponsorsContainer.classList.remove("active");
    });
  
    sponsorsContainer.addEventListener("mousemove", e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - sponsorsContainer.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scrolling speed
      sponsorsContainer.scrollLeft = scrollLeft - walk;
    });
  
    // Carousel and Popup
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popup-image");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");
    const popupSocial = document.getElementById("popup-social");
  
    // Data for artists
    const artistData = {
      artist1: {
        image: "artist1.jpg",
        title: "Project Name 1",
        description: "Description for Project 1.",
        social: "https://instagram.com/artist1",
      },
      artist2: {
        image: "artist2.jpg",
        title: "Project Name 2",
        description: "Description for Project 2.",
        social: "https://instagram.com/artist2",
      },
      // Add more artist details as needed
    };
  
    // Open Popup
    window.openPopup = artistId => {
      const artist = artistData[artistId];
      if (artist) {
        popupImage.src = artist.image;
        popupTitle.textContent = artist.title;
        popupDescription.textContent = artist.description;
        popupSocial.href = artist.social;
        popupSocial.textContent = "Follow on Instagram";
      }
      popup.classList.add("show");
    };
  
    // Close Popup
    window.closePopup = () => {
      popup.classList.remove("show");
    };
  });

  const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        openPopup(card);
    });
});

function openPopup(card) {
    const popup = document.querySelector('.popup');
    const popupLeft = popup.querySelector('.popup-left img');
    const popupRight = popup.querySelector('.popup-right');

    const cardImage = card.querySelector('img');
    const overlayText = card.querySelector('.overlay').innerText;

    if (cardImage) {
        popupLeft.src = cardImage.src;
    }

    popupRight.innerHTML = `
        <h3>${overlayText}</h3>
        <p>Additional details about this item will go here.</p>
    `;

    popup.classList.add('show');
}

const closeBtn = document.querySelector('.popup .close');
closeBtn.addEventListener('click', () => {
    const popup = document.querySelector('.popup');
    popup.classList.remove('show');
});

  