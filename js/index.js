// Get name
const name = prompt('Enter your name:');
const nameElement = document.getElementById('name');
nameElement.textContent = name;

// slideshow
let slideIndex = 0;
let slideshowTimer;
let isManualClick = false; // menandai jika ada klik manual

showSlides();

function plusDivs(n) {
    showSlides(slideIndex += n);
    resetTimer();
    isManualClick = true;
    setTimeout(() => {
        isManualClick = false;
    }, 1000); // gk ada manual klik, lanjut slide otomatis
}

function changeSlide(n) {
    showSlides(slideIndex = n);
    resetTimer();
    isManualClick = true;
    setTimeout(() => {
        isManualClick = false;
    }, 1000); 
}

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("img-slideshow");
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex].style.display = "block";
    slideIndex++;

    if (!isManualClick) {
        slideshowTimer = setTimeout(showSlides, 10000); // Mengubah slide setiap 10 detik
    }
}

function resetTimer() {
    clearTimeout(slideshowTimer);
    slideshowTimer = setTimeout(showSlides, 10000); // Reset timer ketika di klik manual
}

// nav bar android
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('active');
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.close-btn').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.remove('active');
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.close-btn').style.display = 'none';
});



// MessageFrom JS
function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["message"].value;

    if (name === "" || birthDate === "" || gender === "" || messages === "") {
        alert("Data tidak boleh kosong");
        return false;
    }
    
    setSenderUI(name, birthDate, gender, messages);

    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

// scroll animasi
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > nav.offsetTop) {
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-list a');

    const smoothScroll = (target) => {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100, 
                behavior: 'smooth',
            });
        }
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.currentTarget.getAttribute('href');

            setTimeout(() => {
                smoothScroll(target);
            }, 300); 
        });
    });
});