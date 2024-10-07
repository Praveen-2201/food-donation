document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});


// document.addEventListener('DOMContentLoaded', () => {
//     const mobileMenu = document.getElementById('mobile-menu');
//     const navLinks = document.querySelector('.nav-links');

//     mobileMenu.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//     });
// });



document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('right-button');
    const prevButton = document.getElementById('left-button');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    let currentIndex = 0;

    const updateSlides = () => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlides();
    });

    window.addEventListener('resize', updateSlides);
});


document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const form = document.getElementById('involvement-form');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Perform form submission handling here (e.g., send data to server)
        alert('Form submitted! Thank you for getting involved.');
        form.reset();
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const featureToggle = document.getElementById('feature-toggle');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    featureToggle.addEventListener('change', () => {
        // Toggle feature functionality
        if (featureToggle.checked) {
            // Perform action when feature is toggled on
            alert('Feature toggled ON');
        } else {
            // Perform action when feature is toggled off
            alert('Feature toggled OFF');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Implement form submission logic (e.g., sending data to backend, showing confirmation)
        alert('Form submitted!');
        // Clear form fields
        contactForm.reset();
    });
});




