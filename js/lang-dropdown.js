function LangDrop(container) {
  this.div = container
  this.lang = this.div.querySelector('.main p[data-lang]').dataset.lang
  this.toggleDrop = () => {
    this.div.classList.toggle('active')
  }
  this.setTranslate = () => {
    console.log(this.lang)

    for(const key in translates[this.lang]) {
      document.querySelector(`[data-t="${key}"]`).innerHTML = translates[this.lang][key]
    }

    recheckK()
  }

  this.div.onclick = e => {
    if(e.target.dataset.lang) {
      if(e.target.dataset.lang !== this.lang) {
        const curLang = this.div.querySelector('.main p[data-lang]'),
              nextLang = e.target
  
        nextLang.insertAdjacentElement('afterend', curLang)
        this.div.querySelector('.main').insertAdjacentElement('afterbegin', nextLang)
        
        this.lang = this.div.querySelector('.main p[data-lang]').dataset.lang
        this.setTranslate()
      }
    }
    this.toggleDrop()
  }
}

const dropLangs = Array.from(document.querySelectorAll('.language-dropdown')).map(c => new LangDrop(c))