// --- ELEMENTS ---
const menubarBtns = document.querySelectorAll(".menubar-btns");
const menubarBtnsSpans = document.querySelectorAll(".menubar-btns span");

const closeNavbarButton = document.querySelector(".close-navbar-btn");
const menubarDiv = document.querySelector(".menubar");

const divNotes = document.querySelector(".notes");
const divPractice = document.querySelector(".practice");
const divSupport = document.querySelector(".support");
const divContact = document.querySelector(".contact");
const divGallery = document.querySelector(".gallery");

const igCard = document.getElementById("igCard");
const ytCard = document.getElementById("ytCard");


const cards = document.querySelectorAll(".photo-card");

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
  contact: divContact,
  gallery: divGallery
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
    pageName === "contact" ? 3 :
    pageName === "gallery" ? 4 : 0
  );
}

// --- EVENT LISTENERS ---
menubarBtns[0].addEventListener("click", () => show("notes"));
menubarBtns[1].addEventListener("click", () => show("practice"));
menubarBtns[2].addEventListener("click", () => show("support"));
menubarBtns[3].addEventListener("click", () => show("contact"));
menubarBtns[4].addEventListener("click", () => show("gallery"));

show("notes");  // default screen


// --- CARD EXPAND ANIMATION ---
ytCard.addEventListener("click", () => ytCard.classList.toggle("expanded"));
igCard.addEventListener("click", () => igCard.classList.toggle("expanded"));


// --- NAVBAR TOGGLE ---
let navbarShown = false;

function navbarFunction() {

  if (!navbarShown) {
    menubarDiv.style.width = "200px";

    menubarBtns.forEach(btn => btn.style.width = "200px");
    menubarBtnsSpans.forEach(span => span.style.display = "block");

    closeNavbarButton.style.backgroundImage = `url("https://res.cloudinary.com/devpcp7mz/image/upload/v1763648385/close_cta8ge.png")`;
    closeNavbarButton.style.marginLeft = '150px';
  } else {
    menubarDiv.style.width = "50px";

    menubarBtns.forEach(btn => btn.style.width = "50px");
    menubarBtnsSpans.forEach(span => span.style.display = "none");

    closeNavbarButton.style.backgroundImage = `url("https://res.cloudinary.com/devpcp7mz/image/upload/v1763648536/navbar_bltx2l.png")`;
    closeNavbarButton.style.marginLeft = "10px";
  }

  navbarShown = !navbarShown;
}



let activeCard = null;

cards.forEach(card => {
  card.addEventListener("click", () => {

    // If clicking same card → close it
    if (activeCard === card) {
      card.classList.remove("active");
      activeCard = null;
      return;
    }

    // Remove active from previous
    if (activeCard) {
      activeCard.classList.remove("active");
    }

    // Activate new one
    card.classList.add("active");
    activeCard = card;
  });
});
