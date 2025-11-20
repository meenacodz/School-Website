// --- ELEMENTS ---
const menubarBtns = document.querySelectorAll(".menubar-btns");
const menubarBtnsSpans = document.querySelectorAll(".menubar-btns span");

const closeNavbarButton = document.querySelector(".close-navbar-btn");
const menubarDiv = document.querySelector(".menubar");

const divNotes = document.querySelector(".notes");
const divPractice = document.querySelector(".practice");
const divSupport = document.querySelector(".support");
const divContact = document.querySelector(".contact");

const igCard = document.getElementById("igCard");
const ytCard = document.getElementById("ytCard");

// --- ACTIVE SPAN COLOR CHANGE ---
function updateActiveSpan(index) {
  menubarBtnsSpans.forEach((span, i) => {
    span.style.color = i === index ? "black" : "white";
  });
}

// --- PAGE SWITCHING ---
const pages = {
  notes: divNotes,
  practice: divPractice,
  support: divSupport,
  contact: divContact
};

function show(pageName) {

  Object.keys(pages).forEach(name => {

    // Notes, Practice, Contact → display block  
    if (name === pageName && name !== "support") {
      pages[name].style.display = "block";
    }

    // Support page → display flex  
    else if (name === pageName && name === "support") {
      pages[name].style.display = "flex";
    }

    // All others hide
    else {
      pages[name].style.display = "none";
    }
  });

  // Update span color when switching pages
  updateActiveSpan(
    pageName === "notes"   ? 0 :
    pageName === "practice"? 1 :
    pageName === "support" ? 2 :
    pageName === "contact" ? 3 : 0
  );
}

// --- EVENT LISTENERS ---
menubarBtns[0].addEventListener("click", () => show("notes"));
menubarBtns[1].addEventListener("click", () => show("practice"));
menubarBtns[2].addEventListener("click", () => show("support"));
menubarBtns[3].addEventListener("click", () => show("contact"));

show("notes");  // default screen


// --- CARD EXPAND ANIMATION ---
ytCard.addEventListener("click", () => ytCard.classList.toggle("expanded"));
igCard.addEventListener("click", () => igCard.classList.toggle("expanded"));


// --- NAVBAR TOGGLE ---
let navbarShown = true;

function navbarFunction() {

  if (!navbarShown) {
    menubarDiv.style.width = "200px";

    menubarBtns.forEach(btn => btn.style.width = "200px");
    menubarBtnsSpans.forEach(span => span.style.display = "block");

    closeNavbarButton.style.backgroundImage = `url("close.png")`;
    closeNavbarButton.style.marginLeft = '150px';
  } else {
    menubarDiv.style.width = "50px";

    menubarBtns.forEach(btn => btn.style.width = "50px");
    menubarBtnsSpans.forEach(span => span.style.display = "none");

    closeNavbarButton.style.backgroundImage = `url("navbar.png")`;
    closeNavbarButton.style.marginLeft = "10px";
  }

  navbarShown = !navbarShown;
}
