// ************* //
// ABOUT SECTION //
// ************* //

function aboutSection() {
  const aboutSectionVisible = document.getElementById("about");

  document.querySelector(".header-section").style.display = "none";
  document.querySelector(".about_menu_section").style.display = "none";
  document.querySelector("#project").style.display = "none";
  document.querySelector("#contact").style.display = "none";

  document.querySelector(".close-button").style.display = "block";
  document.querySelector(".about-section").style.display = "block";
  document.querySelector(".circle1").style.display = "block";
  document.querySelector(".circle2").style.display = "block";

  aboutSectionVisible.classList.remove("menu");
  aboutSectionVisible.classList.add("content-change");

  // Remove from about section after expanding
  document
    .querySelector(".about_headings_bgtitle")
    .classList.remove("heading-background-title");
}

// ************* //
// MODAL SECTION //
// ************* //

var modal = document.getElementById("blog_modal");
var btn = document.getElementById("modal_btn");
var closeBtn = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
