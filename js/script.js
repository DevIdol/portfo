const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', navHighlighter)

function navHighlighter() {
  let scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop =
      current.getBoundingClientRect().top + window.pageYOffset - 90
    const sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.navigation a[href*=' + sectionId + ']')
        .classList.add('active')
      document
        .querySelector('#mobile-nav .navigation a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('.navigation a[href*=' + sectionId + ']')
        .classList.remove('active')
      document
        .querySelector('#mobile-nav .navigation a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  })
}

const backTop = document.querySelector('.back-top')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 150) {
    backTop.classList.add('back-active')
  } else {
    backTop.classList.remove('back-active')
  }
})



var date = new Date()
var getyear = date.getFullYear()
document.getElementById('currentyear').innerHTML = getyear
