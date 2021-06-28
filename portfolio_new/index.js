const arrows = document.querySelectorAll('#arrows')
const card = document.querySelector('#card')

// Card project switching
// const Projects = [`{}`, `{}`, `{}`, `{}`]
const Projects = [` <h2 class="card__title" id="card__title">Paradays</h2>
<p class="card__description" id="card__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem expedita quisquam tempore sequi minima assumenda, magni fuga quasi animi impedit?</p>
<a class="card__btn" id="card__btn" href="https://github.com/Lherajt/LuckyPortfolio/tree/master/Lucky_portfolio/PProject_restaurant" target="_blank">Code</a>
<a class="card__btn" id="card__btn" href="../PProject_restaurant/index.html" target="_blank">View</a>`,

 `<h2 class="card__title" id="card__title">Coral Snake</h2>
 <p class="card__description" id="card__description">good lorem 222222222 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem</p>
 <a class="card__btn" id="card__btn" href="https://github.com/Lherajt/LuckyPortfolio/tree/master/Lucky_portfolio/MySnake" target="_blank">Code</a>
 <a class="card__btn" id="card__btn" href="../MySnake/index.html" target="_blank">View</a>`,
 
 `<h2 class="card__title" id="card__title">Sports Search API</h2>
 <p class="card__description" id="card__description">good lorem333333333333333Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem</p>
 <a class="card__btn" id="card__btn" href="https://github.com/Lherajt/LuckyPortfolio/tree/master/Lucky_portfolio/sportsAPI" target="_blank">Code</a>
 <a class="card__btn" id="card__btn" href="../MySnake/index.html" target="_blank">View</a>`,
 
 `<h2 class="card__title" id="card__title">Resume</h2>
 <p class="card__description" id="card__description">good lorem344444444444333333Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem</p>
 
 <a class="card__btn" id="card__btn" href="../MySnake/index.html" target="_blank">View</a>`]


// arrows.forEach(arrow => {
//     arrow.addEventListener('click', () => {
//         card.innerHTML = `
        
//         <h2 class="card__title" id="card__title">Paradays</h2>
//         <p class="card__description" id="card__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem expedita quisquam tempore sequi minima assumenda, magni fuga quasi animi impedit?</p>
//         <a class="card__btn" id="card__btn" href="https://github.com/Lherajt/LuckyPortfolio/tree/master/Lucky_portfolio/PProject_restaurant" target="_blank">Code</a>
//         <a class="card__btn" id="card__btn" href="../PProject_restaurant/index.html" target="_blank">View</a>
    
//         `
//     })
// })

arrows.forEach(arrow => {
    let i = 0
    arrow.addEventListener('click', () => {
        card.innerHTML = `
        ${Projects[i]}
        `
        i++
    })
})



console.log({arrows});