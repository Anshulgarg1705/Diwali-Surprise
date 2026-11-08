
function showScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function startSurprise() {
    showScreen("confession");
}

function showHate() {
    showScreen("hate");
}

function showGallery() {
    showScreen("gallery");
}

function showLetter() {
    showScreen("letter");
}

function celebrate() {
    showScreen("final");

    for (let i = 0; i < 70; i++) {
        setTimeout(createSparkle, i * 45);
    }
}

// Floating golden sparkles
function createSparkle() {
    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";
    sparkle.innerHTML = ["✨", "⭐", "💛", "🌟", "🪔"][
        Math.floor(Math.random() * 5)
    ];

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.fontSize = (12 + Math.random() * 22) + "px";
    sparkle.style.animationDuration = (3 + Math.random() * 5) + "s";

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 8000);
}

// Continuous background effects
setInterval(createSparkle, 400);
