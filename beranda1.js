let slideIndex = 0;
let slideTimer;

function changeSlide(n) {
    clearTimeout(slideTimer); // Hentikan timer sebelumnya
    showSlides(slideIndex += n);
}

function showSlides() {
    let slides = document.getElementsByClassName("slider-image");
    
    // Reset slideIndex jika melebihi batas
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1; 
    }
    
    // Sembunyikan semua gambar
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Tampilkan gambar aktif
    slides[slideIndex].style.display = "block";
    
    // Set timer untuk slide berikutnya
    slideTimer = setTimeout(() => {
        slideIndex++;
        showSlides();
    }, 5000);
}

// Mulai slider
showSlides();
