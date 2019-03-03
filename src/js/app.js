import {toggleMenu} from './header'
import {accordion, scheduleInfo} from './schedule'
import {next, nextSlide, prev, prevSlide} from './speakers'

toggleMenu()

const scrollLinks = document.querySelectorAll('.sm-scroll')
scrollLinks.forEach(link => {
    link.addEventListener('click', ev => {
        ev.preventDefault()
        const href = link.getAttribute('href')
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

accordion()

const panelLinks = document.querySelectorAll('.panel-menu a')
panelLinks.forEach((link, i) => {
    link.addEventListener('click', () => {
        const content = document.querySelector('.panel-content')
        content.innerHTML = scheduleInfo[i].info
    })
})

next.addEventListener('click', () => {
    nextSlide()
})

prev.addEventListener('click', () => {
    prevSlide()
})


