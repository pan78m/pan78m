// ************* //
// CUSOTM CURSOR //
// ************* //

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 5) + "px; left: " + (e.pageX - 5) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

// ********************* //
// COUNTDOWN FOR LOADING //
// ********************* //

document.querySelector(".container").style.display = "none";
var count = 100;

var interval = setInterval(function () {
  document.getElementById("parcentage").innerText = --count + "%";

  if (count === 0) clearInterval(interval);
  if (count === 0) {
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".container").style.display = "block";
  }
}, 30);



// ************* //
// MATRIX EFFECT //
// ************* //

const canvas = document.getElementById("Matrix");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZEFGHIJKLMNOPQRSTUV";
const nums = "0123456789456789";

const alphabet = katakana + latin + nums;

const fontSize = 26;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

const draw = () => {
  context.fillStyle = "rgba(0, 0, 0, 0.2)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "rgb(113, 64, 218, 0.7)";
  context.font = fontSize + "px monospace";

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.963) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};

setInterval(draw, 90);

// ************* //
// TYPING EFFECT //
// ************* //

class TypeWriter {
  constructor(txtElement, words, wait = 2000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 150;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }
    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  new TypeWriter(txtElement, words, wait);
}

// ******************** //
// CLOSE BUTTON SECTION //
// ******************** //

function closeSection() {
  const aboutSectionVisible = document.getElementById("about");
  const projectSectionVisible = document.getElementById("project");
  const contactSectionVisible = document.getElementById("contact");

  document.querySelector(".header-section").style.display = "block";
  document.querySelector(".about_menu_section").style.display = "block";
  document.querySelector(".project_menu_section").style.display = "block";
  document.querySelector(".contact_menu_section").style.display = "block";

  document.querySelector(".close-button").style.display = "none";
  document.querySelector(".about-section").style.display = "none";
  document.querySelector(".project-section").style.display = "none";
  document.querySelector(".contact-section").style.display = "none";
  document.querySelector(".circle1").style.display = "none";
  document.querySelector(".circle2").style.display = "none";

  document.querySelector("#about").style.display = "flex";
  document.querySelector("#project").style.display = "flex";
  document.querySelector("#contact").style.display = "flex";

  aboutSectionVisible.classList.remove("content-change");
  aboutSectionVisible.classList.add("menu");

  projectSectionVisible.classList.remove("content-change");
  projectSectionVisible.classList.add("menu");

  contactSectionVisible.classList.remove("content-change");
  contactSectionVisible.classList.add("menu");
}
