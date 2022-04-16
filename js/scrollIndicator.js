const scrollIndicator = document.querySelector('#scroll-indicator')

let  k = (window.innerHeight - 120) / document.documentElement.scrollTopMax
scrollIndicator.style.top = document.documentElement.scrollTop * k + 'px'

document.addEventListener('scroll', () => {
  scrollIndicator.style.top = document.documentElement.scrollTop * k + 'px'
})

function recheckK() {
  k = (window.innerHeight - 120) / document.documentElement.scrollTopMax
  scrollIndicator.style.top = document.documentElement.scrollTop * k + 'px'
}