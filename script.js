


document.addEventListener('scroll', () => {
  const header = document.getElementById('Navbar');

  if (header) {  // Ensure element exists
    if (window.scrollY > 0) {
      header.classList.add('header-scroller');
    } else {
      header.classList.remove('header-scroller');
    }
  }
});











// Select the carousel and dot elements
const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');
const totalItems = document.querySelectorAll('.carousel-item').length;

let currentIndex = 0;

// Function to move to the next item
function showNextItem() {
  currentIndex = (currentIndex + 1) % totalItems; // Loop back to the start
  updateCarouselPosition();
  updateDots();
}

// Function to move to the previous item
function showPrevItem() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Loop to the last item
  updateCarouselPosition();
  updateDots();
}

// Function to update carousel position
function updateCarouselPosition() {
  const offset = -currentIndex * 100;  // Shift by 100% of the current index
  carousel.style.transform = `translateX(${offset}%)`;
}

// Function to update dots for active state
function updateDots() {
  dots.forEach(dot => dot.classList.remove('active')); // Remove active class from all dots
  dots[currentIndex].classList.add('active'); // Add active class to the current dot
}

// Attach click event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarouselPosition();
    updateDots();
  });
});

// Auto-advance the carousel every 3 seconds
setInterval(showNextItem, 3000);

// Initial dot update
updateDots();


// Footer with Map

function initMap() {
  var location = { lat: 51.4807, lng: -0.1234 }; // Example coordinates (Battersea)
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: location,
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Bakery",
  });
}
