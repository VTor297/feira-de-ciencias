/* ========================================
   DARK MODE
======================================== */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    themeToggle.textContent = isLight ? "☀️" : "🌙";

    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );

});


/* ========================================
   REVEAL ON SCROLL
======================================== */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if (top < triggerBottom) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ========================================
   BOTÃO VOLTAR AO TOPO
======================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

        topBtn.style.alignItems = "center";
        topBtn.style.justifyContent = "center";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ========================================
   MENU SCROLL SUAVE
======================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        const headerHeight =
            document.querySelector(".header").offsetHeight;

        const position =
            target.offsetTop - headerHeight;

        window.scrollTo({
            top: position,
            behavior: "smooth"
        });

    });

});


/* ========================================
   HEADER DINÂMICO
======================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.padding = "0";
        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* ========================================
   MEDIDOR DE TENSÃO ANIMADO
======================================== */

const voltageDisplay =
    document.getElementById("voltage");

let currentVoltage = 0;

const maxVoltage = 3.85;

function animateVoltage() {

    if (!voltageDisplay) return;

    const increment = maxVoltage / 120;

    const interval = setInterval(() => {

        currentVoltage += increment;

        if (currentVoltage >= maxVoltage) {

            currentVoltage = maxVoltage;

            clearInterval(interval);

        }

        voltageDisplay.textContent =
            currentVoltage.toFixed(2) + "V";

    }, 25);

}

const meterSection =
    document.getElementById("resultados");

let voltageStarted = false;

window.addEventListener("scroll", () => {

    if (!meterSection) return;

    const top =
        meterSection.getBoundingClientRect().top;

    if (
        top < window.innerHeight * 0.8 &&
        !voltageStarted
    ) {

        voltageStarted = true;

        animateVoltage();

    }

});


/* ========================================
   CONTADOR NUMÉRICO
======================================== */

function animateCounter(element, target) {

    let value = 0;

    const speed = target / 100;

    const counter = setInterval(() => {

        value += speed;

        if (value >= target) {

            value = target;

            clearInterval(counter);

        }

        element.textContent =
            Math.floor(value);

    }, 20);

}


/* ========================================
   EFEITO PARALLAX HERO
======================================== */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const offset = window.scrollY;

    if (hero) {

        hero.style.backgroundPositionY =
            offset * 0.5 + "px";

    }

});


/* ========================================
   PARTÍCULAS DE ENERGIA
======================================== */

const particlesContainer =
    document.querySelector(".particles");

if (particlesContainer) {

    for (let i = 0; i < 50; i++) {

        const particle =
            document.createElement("span");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";

        particle.style.animationDelay =
            Math.random() * 8 + "s";

        particle.style.animationDuration =
            4 + Math.random() * 8 + "s";

        particle.style.width =
            2 + Math.random() * 4 + "px";

        particle.style.height =
            particle.style.width;

        particlesContainer.appendChild(
            particle
        );

    }

}


/* ========================================
   EFEITO DE DIGITAÇÃO HERO
======================================== */

const subtitle = document.querySelector(".hero p");

if (subtitle) {

    const text = subtitle.textContent;

    subtitle.textContent = "";

    let index = 0;

    function typeWriter() {

        if (index < text.length) {

            subtitle.textContent +=
                text.charAt(index);

            index++;

            setTimeout(typeWriter, 30);

        }

    }

    setTimeout(typeWriter, 800);

}


/* ========================================
   DESTACAR LINK ATIVO
======================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* ========================================
   EFEITO BRILHO NOS CARDS
======================================== */

document
.querySelectorAll(
    ".card, .material-card, .concept-card, .application-card"
)
.forEach(card => {

    card.addEventListener(
        "mousemove",
        e => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            card.style.setProperty(
                "--mouse-x",
                `${x}px`
            );

            card.style.setProperty(
                "--mouse-y",
                `${y}px`
            );

        }
    );

});


/* ========================================
   OBSERVER PERFORMANCE
======================================== */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "active"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );

document
.querySelectorAll(".reveal")
.forEach(el => observer.observe(el));


/* ========================================
   PRELOAD FINAL
======================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "⚡ Projeto Dínamo carregado com sucesso!"
    );

});