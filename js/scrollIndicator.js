const scrollIndicator = document.querySelector('#scroll-indicator')
let k = null

if(scrollMaxY) {
  k = (window.innerHeight - 120) / scrollMaxY
  
  document.addEventListener('scroll', () => {
    scrollIndicator.style.top = scrollY * k + 'px'
  })
}
else {
  k = (window.innerHeight - 120) / document.documentElement.scrollTopMax

  scrollIndicator.style.top = document.documentElement.scrollTop * k + 'px'
  
  document.addEventListener('scroll', () => {
    scrollIndicator.style.top = document.documentElement.scrollTop * k + 'px'
  })
}

function recheckK() {
  k = (window.innerHeight - 120) / document.documentElement.scrollTopMax
  scrollIndicator.style.top = document.documentElement.scrollTop * k + 'px'
}