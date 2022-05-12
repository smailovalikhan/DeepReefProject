// POPUPS

function popup(id, showButton) {
  const popup = document.querySelector('#' + id + '.popup')

  showButton?.addEventListener('click', () => popupShow(id))
  popup.querySelector('.close-button').addEventListener('click', () => popupHide(id))
}

function popupShow(id) {
  const popup = document.querySelector('#' + id + '.popup')

  popup.classList.replace('full-hidden', 'hidden')
  setTimeout(() => popup.classList.remove('hidden'), 50)
}

function popupHide(id) {
  const popup = document.querySelector('#' + id + '.popup')

  popup.classList.add('hidden')
  setTimeout(() => popup.classList.replace('hidden', 'full-hidden'), 50)
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