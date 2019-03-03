let currentSlide = 0
const holder = document.querySelector('.holder')
const totalSlides = holder.querySelectorAll('.slide')
export const next = document.querySelector('.next')
export const prev = document.querySelector('.prev')

const moveSlide = slide => {
    const leftPosition = -slide * 100 + 'vw'
    holder.style.left = leftPosition
}

export const nextSlide = () => {
    currentSlide = currentSlide + 1
    if (currentSlide > totalSlides.length - 1) {
        currentSlide = 0
    }
    moveSlide(currentSlide)
}

export const prevSlide = () => {
    currentSlide = currentSlide - 1
    if (currentSlide < 0) {
        currentSlide = totalSlides.length - 1
    }
    moveSlide(currentSlide)
}