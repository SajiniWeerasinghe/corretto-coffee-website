 
    const slides = document.querySelectorAll('.slider img');
    let currentIndex = 0;

    document.querySelector('.next').addEventListener('click', () => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    });

    document.querySelector('.prev').addEventListener('click', () => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        slides[currentIndex].classList.add('active');
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }, 5000);
 

    
    
// .........header.............
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        // Scroll Down - Hide Header
        header.style.top = "-100px";
    } else {
        // Scroll Up - Show Header
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;
});
// ........header........

