document.addEventListener("DOMContentLoaded", function () {
    const typingElement = document.querySelector(".typing");
    const words = ["Saya siswi SMKN 1 NGANJUK", "Jurusan Pengembangan Gim"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 100 : 200);
        }
    }

    document.getElementById("nameTitle").addEventListener("click", function () {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    });

    typeEffect();
});

// ✅ Lightbox functions (placed globally, outside DOMContentLoaded)
function openLightbox(imgElement) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightbox.style.display = "flex";
    lightboxImg.src = imgElement.src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}