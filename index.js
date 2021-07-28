const arrows = document.querySelectorAll('#arrows')
const card = document.querySelector('#card')
const projectBtn = document.querySelector('#projects-btn')
const projectPagination = document.querySelector('#work-pagination')
const title = document.querySelector('#title')
const contact = document.querySelector('#contact')
const backBtn = document.querySelector('#back-btn')
const about = document.querySelector('#about')
let touchstartX = 0;
let touchendX = 0;




// Card project list for switching
const Projects = [`<h2 class="card__title" id="card__title">Sports Search API</h2>
<p class="card__description" id="card__description">I enjoy sports so making this project was fun. I got access to the thesportsdb.com API with the API key to get the data. Originally, I made 4 async-await functions which were getting data and displaying it in the DOM. Those were for the athlete card, league highlights, sports highlights and scores. I made the functions into one big function after making them work. Styling the page was the next step and I used the VanillaTilt.js to add the cool glare effect to bigger screens.</p>
<a class="card__btn" id="card__btn" href="https://github.com/Lherajt/LuckyPortfolio/tree/gh-pages/sportAPI" target="_blank">Code</a>
<a class="card__btn" id="card__btn" href="./sportAPI/index.html" target="_blank">View</a>`,

    ` <h2 class="card__title" id="card__title">Paradays</h2>
<p class="card__description" id="card__description">This project is a landing page for an imaginary restaurant. I wrote the HTML skeleton for the landing page, form and menu. Styling the page with CSS was the next step. I used JS to open and close navigation menu and switch between menu sections.</p>
<a class="card__btn" id="card__btn" href="https://github.com/Lherajt/LuckyPortfolio/tree/gh-pages/PProject_restaurant" target="_blank">Code</a>
<a class="card__btn" id="card__btn" href="./PProject_restaurant/index.html" target="_blank">View</a>`,

    `<h2 class="card__title" id="card__title">Coral Snake</h2>
 <p class="card__description" id="card__description">I used the For loop to make css grid playground. I put all grids into one array and made another array representing the snake. The control function directs the snake from grid to grid. The biggest function is called "move" which starts and restarts the game, it uses Timeout interval to move the snake. It deals with the snake eating food and makes the snake black yellow and red.</p>
 <a class="card__btn" id="card__btn" href="https://github.com/Lherajt/LuckyPortfolio/tree/gh-pages/MySnake" target="_blank">Code</a>
 <a class="card__btn" id="card__btn" href="./MySnake/index.html" target="_blank">View</a>`,

    `<h2 class="card__title" id="card__title">Resume</h2>
 <a class="card__btn" id="card__btn" href="./img/Lucky-resume.pdf" target="_blank">View</a>`]

// making arrows loop over projects
let i = 0
arrows[1].addEventListener('click', () => {
    i++
    i > 3 ? i = 0 : i < 0 ? i = 3 : ''
    card.innerHTML = `
    ${Projects[i]}
    `
})

arrows[0].addEventListener('click', () => {
    i--
    i > 3 ? i = 0 : i < 0 ? i = 3 : ''
    card.innerHTML = `
    ${Projects[i]}
    `
})

// keyboard arrows looping over projects
document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 37:
            i--
            i > 3 ? i = 0 : i < 0 ? i = 3 : ''
            card.innerHTML = `${Projects[i]}`
            break;
        case 39:
            i++
            i > 3 ? i = 0 : i < 0 ? i = 3 : ''
            card.innerHTML = `${Projects[i]}`
            break;
    }
});

// mobile swipe loop over projects

function handleGesture() {
    if (touchendX < touchstartX) {
        i++
        i > 3 ? i = 0 : i < 0 ? i = 3 : ''
        card.innerHTML = `
    ${Projects[i]}
    `
    }
    if (touchendX > touchstartX) {
        i--
        i > 3 ? i = 0 : i < 0 ? i = 3 : ''
        card.innerHTML = `
    ${Projects[i]}
    `
    }
}

document.addEventListener("DOMContentLoaded", function (event) {

    card.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    });

    card.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleGesture();
    });
});


card.innerHTML = `
    ${Projects[i]}
    `
    
// initial text change for google search
card.innerHTML = `<h2 class="card__title" id="card__title">Welcome to my Portfolio</h2>
<p class="card__description" id="card__description">I love creating websites by using HTML, CSS and JavaScript. Feel free to view my projects</p>`
    

// ProjectBtn card open
projectBtn.addEventListener('click', () => {
    projectPagination.style.display = "block"
    card.style.display = "flex"
    title.style.display = "none"
    projectBtn.style.display = "none"
    backBtn.style.display = "inline"
    // resume.innerHTML = ``
    card.innerHTML = `
    ${Projects[i]}
    `
})

// backBtn changing page to home
backBtn.addEventListener('click', () => {
    projectPagination.style.display = "none"
    card.style.display = "none"
    title.style.display = "block"
    backBtn.style.display = "none"
    projectBtn.style.display = "inline"
})

// Closing hover of contactBtn on mobile click outside
document.addEventListener('click', () => {

    if (!$(event.target).closest(contact)) {
        contact.preventDefault();
    }
})