const arrows = document.querySelectorAll('#arrows')
const card = document.querySelector('#card')
const projectBtn = document.querySelector('#projects-btn')
const projectPagination = document.querySelector('#work-pagination')
const title = document.querySelector('#title')
const contact = document.querySelector('#contact')
const backBtn = document.querySelector('#back-btn')
const about = document.querySelector('#about')

// const resume = document.querySelector('#resume')



// Card project switching
const Projects = [ `<h2 class="card__title" id="card__title">Sports Search API</h2>
<p class="card__description" id="card__description">I enjoy sports so making the sports API project was fun. I got access to the thesportsdb.com API with the API key to get the data. Originally I made 4 async-await functions which were getting data and displaying it in the DOM. Those were for the athlete card, league highlights, sports highlights and scores. I made the functions into one big function after making them work. Styling the page was the next step and I used the VanillaTilt.js to add the cool glare effect to bigger screens.</p>
<a class="card__btn" id="card__btn" href="https://github.com/Lherajt/LuckyPortfolio/tree/master/Lucky_portfolio/sportsAPI" target="_blank">Code</a>
<a class="card__btn" id="card__btn" href="sportsAPI/index.html" target="_blank">View</a>`,

` <h2 class="card__title" id="card__title">Paradays</h2>
<p class="card__description" id="card__description">Landing page for an imaginary restaurant. I wrote the HTML skeleton for the landing page, form and menu. Styling the page with CSS was the next step. I used JS to open and close navigation menu and switch between menu sections.</p>
<a class="card__btn" id="card__btn" href="https://github.com/Lherajt/LuckyPortfolio/tree/master/Lucky_portfolio/PProject_restaurant" target="_blank">Code</a>
<a class="card__btn" id="card__btn" href="./PProject_restaurant/index.html" target="_blank">View</a>`,

 `<h2 class="card__title" id="card__title">Coral Snake</h2>
 <p class="card__description" id="card__description">I used for loop to make css grid playground. I put all grids to one array and made another array representing snake. Control function directs snake from grid to grid. The biggest function is "move" which starts and restarts the game, uses Timeout interval to move snake, deals with snake eating food and makes snake black yellow and red.</p>
 <a class="card__btn" id="card__btn" href="https://github.com/Lherajt/LuckyPortfolio/tree/master/Lucky_portfolio/MySnake" target="_blank">Code</a>
 <a class="card__btn" id="card__btn" href="./MySnake/index.html" target="_blank">View</a>`,
 
 `<h2 class="card__title" id="card__title">Resume</h2>
 <a class="card__btn" id="card__btn" href="./img/Lucky-resume.pdf" target="_blank">View</a>`]





// making arrows loop over projects

let i = 0
arrows[1].addEventListener('click', () => {
    i > 3 ? i = 0 : i < 0 ? i = 3 : ''
    card.innerHTML = `
    ${Projects[i]}
    `
    i++
})
arrows[0].addEventListener('click', () => {
    i > 3 ? i = 0 : i < 0 ? i = 3 : ''
    card.innerHTML = `
    ${Projects[i]}
    `
    i--
})
card.innerHTML = `
    ${Projects[i]}
    `


projectBtn.addEventListener('click', () => {
    projectPagination.style.display = "block"
    card.style.display = "flex"
    title.style.display = "none"
    projectBtn.style.display = "none"
    backBtn.style.display = "inline"

})

backBtn.addEventListener('click', () => {
    projectPagination.style.display = "none"
    card.style.display = "none"
    title.style.display = "block"
    backBtn.style.display = "none"
    projectBtn.style.display = "inline"
})

