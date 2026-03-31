// ---IMPORTS---
// import { db, ref, push, onValue } from "./firebase.js";


// --- ELEMENTS ---
const menubarBtns = document.querySelectorAll(".menubar-btns");
const menubarBtnsSpans = document.querySelectorAll(".menubar-btns span");

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

let isLoggedIn = false;

function loadNotices(snapshot) {

    noticeList.innerHTML = "";

    snapshot.forEach((child) => {

        const data = child.val();
        const key = child.key;

        const div = document.createElement("div");
        div.className = "notice";

        const text = document.createElement("span");
        text.innerText = data.message;

        div.appendChild(text);

        // 👇 DELETE BUTTON (sirf login pe)
        if (isLoggedIn) {

            const delBtn = document.createElement("button");
            delBtn.innerText = "Delete";

            delBtn.onclick = () => {
                if (confirm("Delete this notice?")) {
                    remove(ref(db, "notices/" + key));
                }
            };

            div.appendChild(delBtn);
        }

        noticeList.prepend(div);

    });
}

let currentSnapshot = null;

onValue(ref(db, "notices"), (snapshot) => {
    currentSnapshot = snapshot;
    loadNotices(snapshot);
});


let authorization = {
    "8839501811": 'kohinoor'
};



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

        if (currentSnapshot) {
            loadNotices(currentSnapshot); // 🔥 refresh
        }

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

    if (currentSnapshot) {
        loadNotices(currentSnapshot); // 🔥 refresh
    }


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





// <--- NOTICES FUNCTIONALTITY --->
// Firebase import
import { db, ref, push, onValue, remove } from "./firebase.js";

const noticePopup = document.getElementById("noticePopup");
const noticeOverlay = document.getElementById("overlay");
const closeNotice = document.getElementById("closeNotice");

const noticeInput = document.getElementById("noticeInput");
const addNoticeBtn = document.getElementById("addNoticeBtn");
const noticeList = document.getElementById("noticeList");
const noticeAddBox = document.getElementById("noticeAddBox");


// OPEN POPUP
showNoticeBtn.addEventListener("click", () => {

    noticePopup.style.display = "flex";
    noticeOverlay.style.display = "block";

    // hide add notice section
    noticeAddBox.style.display = "none";

});


// CLOSE POPUP
function closeNoticeWindow() {
    noticePopup.style.display = "none";
    noticeOverlay.style.display = "none";
}

closeNotice.addEventListener("click", closeNoticeWindow);
noticeOverlay.addEventListener("click", closeNoticeWindow);


// ADD NOTICE
addNoticeBtn.addEventListener("click", () => {

    const text = noticeInput.value.trim();

    if (!text) return;

    push(ref(db, "notices"), {
        message: text,
        time: Date.now()
    });

    noticeInput.value = "";

});


function getSmartTime(timestamp) {

    const date = new Date(timestamp);
    const now = new Date();

    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const noticeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (noticeDate.getTime() === today.getTime()) {
        return "Today • " + time;
    }

    if (noticeDate.getTime() === yesterday.getTime()) {
        return "Yesterday • " + time;
    }

    return date.toLocaleDateString([], { day: 'numeric', month: 'short' }) + " • " + time;
}

// REALTIME NOTICE LOAD
onValue(ref(db, "notices"), (snapshot) => {

    noticeList.innerHTML = "";

    snapshot.forEach((child) => {

        const data = child.val();
        const key = child.key;

        const div = document.createElement("div");
        div.className = "notice";

        const content = document.createElement("div");
        content.className = "notice-content";

        const text = document.createElement("div");
        text.className = "notice-text";
        text.innerText = data.message;

        const time = document.createElement("div");
        time.className = "notice-time";
        time.innerText = getSmartTime(data.time);

        content.appendChild(text);
        content.appendChild(time);

        div.appendChild(content);

        // DELETE BUTTON (teacher only)
        if (isLoggedIn) {

            const delBtn = document.createElement("button");
            delBtn.innerText = "Delete";

            delBtn.onclick = () => {
                if (confirm("Delete this notice?")) {
                    remove(ref(db, "notices/" + key));
                }
            };

            div.appendChild(delBtn);
        }

        noticeList.prepend(div);

    });

});

editNoticeBtn.addEventListener("click", () => {

    noticePopup.style.display = "flex";
    noticeAddBox.style.display = "flex";
    noticeOverlay.style.display = "block";

});
