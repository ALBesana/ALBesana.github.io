document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    function adjustBackground() {
        if (window.innerWidth < 768) {
            body.style.backgroundSize = "contain";
        } else {
            body.style.backgroundSize = "cover";
        }
    }

    adjustBackground();
    window.addEventListener("resize", adjustBackground);
});

document.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.getElementById('home');

    homeLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const textElements = document.querySelectorAll('h1, h2, p, a');

    function adjustContrast() {
        textElements.forEach(el => {
            if (window.innerWidth < 768) {
                el.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.9)';
            } else {
                el.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.8)';
            }
        });
    }

    adjustContrast();
    window.addEventListener('resize', adjustContrast);
});

// about button
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                const targetSection = document.querySelector(this.hash);
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

// image viewer
document.addEventListener("DOMContentLoaded", () => {
    const achievementImages = document.querySelectorAll('.achievement-image');
    const backgroundOverlay = document.getElementById('background-overlay');
    const fullscreenImage = document.createElement('img');
    document.body.appendChild(fullscreenImage);
    
    fullscreenImage.classList.add('fullscreen-image');

    achievementImages.forEach(img => {
        img.addEventListener('click', () => {
            fullscreenImage.src = img.src;
            fullscreenImage.classList.add('show');
            backgroundOverlay.style.display = 'block';
        });
    });

    // profile picture
    const profileImage = document.querySelector('.profile-image');
    profileImage.addEventListener('click', () => {
    fullscreenImage.src = profileImage.src;
    fullscreenImage.classList.add('show');
    backgroundOverlay.style.display = 'block';
});


    fullscreenImage.addEventListener('click', () => {
        fullscreenImage.classList.remove('show');
        backgroundOverlay.style.display = 'none';
    });

    backgroundOverlay.addEventListener('click', () => {
        fullscreenImage.classList.remove('show');
        backgroundOverlay.style.display = 'none';
    });
});

// music settings
const audio = document.getElementById('background-music');
const muteButton = document.getElementById('mute-toggle');
const muteIcon = document.getElementById('mute-icon');

audio.volume = 0.08;

// icons
muteIcon.src = audio.muted ? 'assets/images/muted_icon.png' : 'assets/images/unmuted_icon.png';

muteButton.addEventListener('click', () => {
    audio.muted = !audio.muted; // muted
    muteIcon.src = audio.muted ? 'assets/images/muted_icon.png' : 'assets/images/unmuted_icon.png'; // muted icon
});

// play checker
audio.play().catch(() => {
    console.log("Autoplay was blocked. Click the mute button to start playback.");
});