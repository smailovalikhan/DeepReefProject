const scrollIndicator = document.querySelector('#scroll-indicator'),
      k = (window.innerHeight - 120) / scrollMaxY

document.addEventListener('scroll', () => {
  scrollIndicator.style.top = scrollY * k + 'px'
})