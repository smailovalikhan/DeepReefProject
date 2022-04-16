const video = document.querySelector('#video'),
      videoButtons = document.querySelectorAll('.video-btn')

videoButtons.forEach(vb => {
  vb.onclick = () => {
    video.style.display = ''
    setTimeout(() => video.classList.remove('hidden'), 20)
  }
})

video.onclick = e => {
  if(e.target.id === 'video') {
    video.classList.add('hidden')
    video.addEventListener('transitionend', () => video.style.display = 'none', {once: 1})
  }
}