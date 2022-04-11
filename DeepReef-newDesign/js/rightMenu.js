const menuButtons = document.querySelectorAll('.rightMenuButton'),
      menu = document.querySelector('#rightMenuPopup'),
      closeMenuButton = document.querySelector('#closeRightMenu')

menuButtons.forEach(mb => {

  mb.onclick = () => {
    menu.style.display = 'block'
    setTimeout(() => menu.classList.remove('right-menu-hidden'), 20)
  }
})

closeMenuButton.onclick = () => {
  menu.classList.add('right-menu-hidden')
  menu.addEventListener('transitionend', () => menu.style.display = 'none', {once: 1})
}