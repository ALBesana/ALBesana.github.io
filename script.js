document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const homeLink = document.getElementById('home');
    const textElements = document.querySelectorAll('h1, h2, p, a');
    const achievementImages = document.querySelectorAll('.achievement-image');
    const backgroundOverlay = document.getElementById('background-overlay');
    const fullscreenImage = document.createElement('img');
    const profileImage = document.querySelector('.profile-image');
    const audio = document.getElementById('background-music');
    const muteButton = document.getElementById('mute-toggle');
    const muteIcon = document.getElementById('mute-icon');

    fullscreenImage.classList.add('fullscreen-image');
    document.body.appendChild(fullscreenImage);

    // Adjust background size
    function adjustBackground() {
        body.style.backgroundSize = window.innerWidth < 768 ? "contain" : "cover";
    }

    // Adjust text contrast
    function adjustContrast() {
        textElements.forEach(el => {
            el.style.textShadow = window.innerWidth < 768
                ? '1px 1px 3px rgba(0, 0, 0, 0.9)'
                : '2px 2px 4px rgba(0, 0, 0, 0.8)';
        });
    }

    // Smooth scroll to top
    homeLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scroll to sections from the navbar
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', (event) => {
            const targetId = anchor.getAttribute('href');
            if (targetId.startsWith('#') && targetId.length > 1) {
                event.preventDefault();
                document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Image viewer logic
    achievementImages.forEach(img => {
        img.addEventListener('click', () => {
            fullscreenImage.src = img.src;
            fullscreenImage.classList.add('show');
            backgroundOverlay.style.display = 'block';
        });
    });

    profileImage.addEventListener('click', () => {
        fullscreenImage.src = profileImage.src;
        fullscreenImage.classList.add('show');
        backgroundOverlay.style.display = 'block';
    });

    // Close the image viewer when clicking on the image or overlay
    [fullscreenImage, backgroundOverlay].forEach(el => {
        el.addEventListener('click', () => {
            fullscreenImage.classList.remove('show');
            backgroundOverlay.style.display = 'none';
        });
    });

    // Mute button
    muteIcon.src = audio.muted ? 'assets/images/muted_icon.png' : 'assets/images/unmuted_icon.png';
    muteButton.addEventListener('click', () => {
        audio.muted = !audio.muted;
        muteIcon.src = audio.muted ? 'assets/images/muted_icon.png' : 'assets/images/unmuted_icon.png';
    });

    function playMusic() {
        audio.play().then(() => {
            console.log("Music started playing.");
        }).catch(() => {
            console.warn("Autoplay blocked! Waiting for user interaction.");
        });
        document.removeEventListener("click", playMusic); // Remove listener after first click
    }

    // Try playing on page load (will fail due to autoplay restrictions)
    audio.volume = 0.08;
    audio.play().catch(() => {
        console.warn("Autoplay blocked. Waiting for user interaction...");
        document.addEventListener("click", playMusic); // Listen for first user click
    });

    // Initial adjustments
    adjustBackground();
    adjustContrast();

    // Event listeners for resizing
    window.addEventListener("resize", () => {
        adjustBackground();
        adjustContrast();
    });
});
