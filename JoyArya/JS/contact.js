// *************** //
// CONTACT SECTION //
// *************** //

function contactSection() {
  const contactSectionVisible = document.getElementById("contact");

  document.querySelector(".header-section").style.display = "none";
  document.querySelector(".contact_menu_section").style.display = "none";
  document.querySelector("#about").style.display = "none";
  document.querySelector("#project").style.display = "none";

  document.querySelector(".close-button").style.display = "block";
  document.querySelector(".contact-section").style.display = "block";
  document.querySelector(".circle1").style.display = "block";
  document.querySelector(".circle2").style.display = "block";

  contactSectionVisible.classList.remove("menu");
  contactSectionVisible.classList.add("content-change");

  // Remove from contact section after expanding
  document
    .querySelector(".contact_headings_bgtitle")
    .classList.remove("heading-background-title");
}

// *************** //
// FORM SUBMISSION //
// *************** //

// MODAL FOR FORM
var modal = document.getElementById("submit_btn");
var btn = document.getElementById("form_modal_btn");
var closeBtn = document.getElementsByClassName("close")[1];

btn.onclick = function () {
  sendMail();
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