const menuIcon = document.querySelector('.menu-icon')
const mobileMenu = document.querySelector('.mobile-menu')

export const toggleMenu = () => {
    menuIcon.addEventListener('click', e => {
        e.preventDefault()
        mobileMenu.classList.toggle('open-menu')
        if (mobileMenu.classList.contains('open-menu')) {
            menuIcon.style.transform = 'rotate(90deg)'
            menuIcon.style.background = '#fff'
        } else {
            menuIcon.style.transform = 'rotate(0deg)'
            menuIcon.style.background = 'none'
        }
    })
}