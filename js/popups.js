// POPUPS

function popup(id, showButton) {
  const popup = document.querySelector('#' + id + '.popup')

  function show() {
    popup.classList.replace('full-hidden', 'hidden')
    setTimeout(() => popup.classList.remove('hidden'), 50)
  }

  function hide() {
    popup.classList.add('hidden')
    setTimeout(() => popup.classList.replace('hidden', 'full-hidden'), 50)
  }

  showButton.addEventListener('click', show)
  popup.querySelector('.close-button').addEventListener('click', hide)
}


// RECIVE-UPDATES

popup('recive-updates', document.querySelector('#recive-updates-button'))

// VIDEO POPUP

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