const scrollIndicator = document.querySelector('#scroll-indicator')

scrollIndicator.style.height = window.innerHeight / document.documentElement.scrollHeight * 800 + 'px'

let  k = window.innerHeight / document.documentElement.scrollHeight
scrollIndicator.style.top = document.documentElement.scrollTop * k + 'px'

document.addEventListener('scroll', () => {
  scrollIndicator.style.top = document.documentElement.scrollTop * k + 'px'
})

function recheckK() {
  k = window.innerHeight / document.documentElement.scrollHeight
  scrollIndicator.style.top = document.documentElement.scrollTop * k + 'px'
}