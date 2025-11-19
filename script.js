
const menubarBtn1 = document.querySelectorAll(".menubar-btns")[0];
const menubarBtn2 = document.querySelectorAll(".menubar-btns")[1];
const menubarBtn3 = document.querySelectorAll(".menubar-btns")[2];
const menubarBtn4 = document.querySelectorAll(".menubar-btns")[3];

const divNotes = document.querySelector('.notes');
const divPractice = document.querySelector('.practice');
const divSupport = document.querySelector(".support");
const divContact = document.querySelector(".contact")

const igCard = document.getElementById("igCard");
const ytCard = document.getElementById("ytCard");

let selected = 'notes';
let notes = () => {
  selected = 'notes';
  menubarBtn1.style.borderBottom = '5px solid red';
  menubarBtn1.style.color = 'red';

  menubarBtn2.style.borderBottom = 'none';
  menubarBtn2.style.color = 'white';
  menubarBtn3.style.borderBottom = 'none';
  menubarBtn3.style.color = 'white';
  menubarBtn4.style.borderBottom = 'none';
  menubarBtn4.style.color = 'white';

  divNotes.style.display = "block";
  divPractice.style.display = "none";
  divSupport.style.display = "none";
  divContact.style.display = "none";
}
let practice = () => {
  selected = 'practice';
  menubarBtn2.style.borderBottom = '5px solid red';
  menubarBtn2.style.color = 'red';

  menubarBtn1.style.borderBottom = 'none';
  menubarBtn1.style.color = 'white';
  menubarBtn3.style.borderBottom = 'none';
  menubarBtn3.style.color = 'white';
  menubarBtn4.style.borderBottom = 'none';
  menubarBtn4.style.color = 'white';

  divNotes.style.display = "none";
  divPractice.style.display = "block";
  divSupport.style.display = "none";
  divContact.style.display = "none";
}

let support = () => {
  selected = 'support';
  menubarBtn3.style.borderBottom = '5px solid red';
  menubarBtn3.style.color = 'red';

  menubarBtn2.style.borderBottom = 'none';
  menubarBtn2.style.color = 'white';
  menubarBtn1.style.borderBottom = 'none';
  menubarBtn1.style.color = 'white';
  menubarBtn4.style.borderBottom = 'none';
  menubarBtn4.style.color = 'white';

  divNotes.style.display = "none";
  divPractice.style.display = "none";
  divSupport.style.display = "flex";
  divContact.style.display = "none";
}
let contact = () => {
  selected = 'contact';
  menubarBtn4.style.borderBottom = '5px solid red';
  menubarBtn4.style.color = 'red';

  menubarBtn2.style.borderBottom = 'none';
  menubarBtn2.style.color = 'white';
  menubarBtn3.style.borderBottom = 'none';
  menubarBtn3.style.color = 'white';
  menubarBtn1.style.borderBottom = 'none';
  menubarBtn1.style.color = 'white';

  divNotes.style.display = "none";
  divPractice.style.display = "none";
  divSupport.style.display = "none";
  divContact.style.display = "block";
}

menubarBtn1.addEventListener("click", notes);
menubarBtn2.addEventListener("click", practice);
menubarBtn3.addEventListener("click", support);
menubarBtn4.addEventListener("click", contact);

notes();







ytCard.addEventListener("click", () => {
  ytCard.classList.toggle("expanded");
});



igCard.addEventListener("click", () => {
  igCard.classList.toggle("expanded");
});
