// navbar toggling
const navbarShowBtn = document.querySelector(".navbar-show-btn");
const navbarCollapseDiv = document.querySelector(".navbar-collapse");
const navbarHideBtn = document.querySelector(".navbar-hide-btn");
const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[user-card-container]");
const searchInput = document.getElementById("search-input");

//doctor details
const dDetails = [
  {
    id: 1,
    name: "Joya Singh",
    img: "dimg/d1.jpg",
    speciality: "Medicine",
  },
  {
    id: 2,
    name: "Nila",
    img: "dimg/d2.jpg",
    speciality: "Audiologists",
  },
  {
    id: 3,
    name: "Anjali Roy",
    img: "dimg/d3.jpg",
    speciality: "Cardiologists",
  },
  {
    id: 4,
    name: "Sakira",
    img: "dimg/d4.jpg",
    speciality: "Cardiothoracic",
  },
  {
    id: 5,
    name: "Sana",
    img: "dimg/doc-3.png",
    speciality: "Endocrinologist",
  },
  {
    id: 6,
    name: "Neha khan",
    img: "dimg/d6.jpg",
    speciality: "ENT Specialists",
  },
  {
    id: 7,
    name: "Pronati",
    img: "dimg/d7.jpg",
    speciality: "Gynecologists",
  },
  {
    id: 8,
    name: "Riyaj",
    img: "dimg/doc-1.png",
    speciality: "Neurologists",
  },
  {
    id: 9,
    name: "Jone Doe",
    img: "dimg/d9.jpg",
    speciality: "Oncologists",
  },
  {
    id: 10,
    name: "Priyanka",
    img: "dimg/d8.jpg",
    speciality: "Orthopedic",
  },
  {
    id: 11,
    name: "Ahamed",
    img: "dimg/d11.jpg",
    speciality: "Pediatrician",
  },
  {
    id: 12,
    name: "Deep",
    img: "dimg/d12.jpg",
    speciality: "Psychiatrists",
  },
  {
    id: 13,
    name: "Suman",
    img: "dimg/d13.jpg",
    speciality: "Pulmonologists",
  },
  {
    id: 14,
    name: "Pankoj",
    img: "dimg/d14.jpg",
    speciality: "Radiologist",
  },
  {
    id: 15,
    name: "Munna",
    img: "dimg/d15.jpg",
    speciality: "Veterinarian",
  },
  {
    id: 16,
    name: "Neha",
    img: "dimg/d3.jpg",
    speciality: "Dentist",
  },
];

// search and display doctor code
let users = [];

const search = () => {
  let searchInput = document.getElementById("search-input").value.toLowerCase();

  // Clear the userCardContainer before populating with new search results
  userCardContainer.innerHTML = '';

  users = dDetails.filter(user => {
    const userText = user.name.toLowerCase() + user.speciality.toLowerCase();
    return userText.includes(searchInput);
  }).map(user => {
    const card = userCardTemplate.content.cloneNode(true).children[0];
    const nameD = card.querySelector("[data-name]");
    const specialityD = card.querySelector("[data-work]");
    const doctorImgSrc = card.querySelector("[data-img]");

    let imageUrl = user.img;
    doctorImgSrc.setAttribute("src", imageUrl);
    nameD.textContent = user.name;
    specialityD.textContent = user.speciality;

    userCardContainer.append(card);
    return { name: user.name, speciality: user.speciality, element: card };
  });

  console.log(users);
};
// search and display doctor code end here

function printD(data) {
  data.forEach(user => {
    const card = userCardTemplate.content.cloneNode(true).children[0];
    const nameD = card.querySelector("[data-name]");
    const specialityD = card.querySelector("[data-work]");
    const doctorImgSrc = card.querySelector("[data-img]");

    let imageUrl = user.img;
    doctorImgSrc.setAttribute("src", imageUrl);
    nameD.textContent = user.name;
    specialityD.textContent = user.speciality;

    userCardContainer.append(card);
    users.push({ name: user.name, speciality: user.speciality, element: card });
  });
}

// Call printD to populate the data when the page is loaded
printD(dDetails);

// Attach the search function to the input field's input event
document.getElementById("search-input").addEventListener("input", search);


// navbar when small screen
navbarShowBtn.addEventListener("click", function () {
  navbarCollapseDiv.classList.add("navbar-show");
});
navbarHideBtn.addEventListener("click", function () {
  navbarCollapseDiv.classList.remove("navbar-show");
});

// stopping all animation and transition
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
