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
        span.style.color = i === index ? "#0ff" : "white";
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
        pageName === "notes" ? 0 :
            pageName === "practice" ? 1 :
                pageName === "support" ? 2 :
                    pageName === "contact" ? 3 :
                        pageName === "gallery" ? 4 : 0
    );
}




// ----------------------------- Teacher Login -------------------

let authorization = {
    "8839501811": 'kohinoor'
};
let isLoggedIn = false;


const overlay = document.getElementById("overlay");
const loginPopup = document.getElementById("loginPopup");

function showLoginPage() {
    overlay.style.display = "block";
    loginPopup.style.display = "block";
}

const editNoticeBtn = document.getElementById("edit-notice");
const showNoticeBtn = document.getElementById("show-notice");
const loginBtn = document.querySelector(".login-submit");

const numberInput = document.getElementById("number");
const passwordInput = document.getElementById("password");


function login() {

    const number = numberInput.value;
    const password = passwordInput.value;

    if (authorization[number] && authorization[number] === password) {

        isLoggedIn = true;

        editNoticeBtn.style.display = "block";
        editNoticeBtn.style.borderTopLeftRadius = "0";
        editNoticeBtn.style.borderBottomLeftRadius = "0";
        editNoticeBtn.style.borderLeft = 'none';

        menubarBtns[4].querySelector("i").classList.replace("bx-user", "bxs-user-check");

        showNoticeBtn.style.borderTopRightRadius = "0";
        showNoticeBtn.style.borderBottomRightRadius = "0";
        showNoticeBtn.style.borderRight = 'none';

        passwordInput.value = "";
        numberInput.value = "";

        loginPopup.style.display = "none";
        overlay.style.display = "none";

    } else {
        passwordInput.value = "";
        alert("Wrong Number or Password");
    }

}

const logoutPopup = document.getElementById("logoutPopup");
const confirmLogout = document.getElementById("confirmLogout");
const cancelLogout = document.getElementById("cancelLogout");

function showLogoutPage() {
    overlay.style.display = "block";
    logoutPopup.style.display = "block";
}

confirmLogout.addEventListener("click", () => {

    isLoggedIn = false;

    menubarBtns[4].querySelector("i").classList.replace("bxs-user-check", "bx-user");

    editNoticeBtn.style.display = "none";
    showNoticeBtn.style.borderTopRightRadius = "";
    showNoticeBtn.style.borderBottomRightRadius = "";
    showNoticeBtn.style.borderRight = "";

    logoutPopup.style.display = "none";
    overlay.style.display = "none";

});

cancelLogout.addEventListener("click", () => {

    logoutPopup.style.display = "none";
    overlay.style.display = "none";

});


menubarBtns[4].addEventListener("click", () => {

    if (isLoggedIn) {
        showLogoutPage();
    } else {
        showLoginPage();
    }

});

const passwordField = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePassword.classList.replace("bx-hide", "bx-show");
    } else {
        passwordField.type = "password";
        togglePassword.classList.replace("bx-show", "bx-hide");
    }

});


loginBtn.addEventListener("click", () => {
    login();
})


overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    loginPopup.style.display = "none";
});




// --- EVENT LISTENERS ---
menubarBtns[0].addEventListener("click", () => show("notes"));
menubarBtns[1].addEventListener("click", () => show("practice"));
// menubarBtns[3].addEventListener("click", () => show("support"));
menubarBtns[2].addEventListener("click", () => show("contact"));
menubarBtns[3].addEventListener("click", () => show("gallery"));
// menubarBtns[4].addEventListener("click", () => {showLoginPage();});

show("notes");  // default screen


// --- CARD EXPAND ANIMATION ---
ytCard.addEventListener("click", () => ytCard.classList.toggle("expanded"));
igCard.addEventListener("click", () => igCard.classList.toggle("expanded"));


// --- NAVBAR TOGGLE ---



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



const noticePopup = document.getElementById("noticePopup");
const noticeOverlay = document.getElementById("noticeOverlay");
const closeNotice = document.getElementById("closeNotice");

// show notice window
showNoticeBtn.addEventListener("click",()=>{

    noticePopup.style.display = "flex";
    noticeOverlay.style.display = "block";

});

// close notice
closeNotice.addEventListener("click",closeNoticeWindow);
noticeOverlay.addEventListener("click",closeNoticeWindow);

function closeNoticeWindow(){
    noticePopup.style.display = "none";
    noticeOverlay.style.display = "none";
}
