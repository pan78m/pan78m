// *************** //
// PROJECT SECTION //
// *************** //

function projectSection() {
  const projectSectionVisible = document.getElementById("project");

  document.querySelector(".header-section").style.display = "none";
  document.querySelector(".project_menu_section").style.display = "none";
  document.querySelector("#about").style.display = "none";
  document.querySelector("#contact").style.display = "none";

  document.querySelector(".close-button").style.display = "block";
  document.querySelector(".project-section").style.display = "block";
  document.querySelector(".circle1").style.display = "block";
  document.querySelector(".circle2").style.display = "block";

  projectSectionVisible.classList.remove("menu");
  projectSectionVisible.classList.add("content-change");

  // Remove from project section after expanding
  document
    .querySelector(".project_headings_bgtitle")
    .classList.remove("heading-background-title");
}

// ************** //
// FILTER SECTION //
// ************** //

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("project_container");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    projectRemoveClass(x[i], "showProjects");
    if (x[i].className.indexOf(c) > -1) projectAddClass(x[i], "showProjects");
  }
}

function projectAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function projectRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button
var btnContainer = document.getElementById("projects_btn_controler");
var btns = btnContainer.getElementsByClassName("project_btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
