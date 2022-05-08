function translatePage(lang) {
  for(const key in translates[lang]) {
    const node = document.querySelector(`[data-t="${key}"]`)
    if(node) {
      if(['INPUT', 'TEXTAREA'].reduce((c, itm) => node.nodeName === itm ? 1 : c, 0)) {
        node.placeholder = translates[lang][key]
      }
      else node.innerHTML = translates[lang][key]
    }
  }
}

translatePage(localStorage.getItem('pageLang') || 'en')
document.body.dataset.lang = localStorage.getItem('pageLang') || 'en'
recheckK()

function LangDrop(container) {
  this.div = container
  this.lang = this.div.querySelector('.main p[data-lang]').dataset.lang
  this.toggleDrop = () => {
    this.div.classList.toggle('active')
  }
  this.setTranslate = () => {
    console.log(this.lang)

    translatePage(this.lang)
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

        document.body.dataset.lang = this.lang
        localStorage.setItem('pageLang', this.lang)
      }
    }
    this.toggleDrop()
  }
}

const dropLangs = Array.from(document.querySelectorAll('.language-dropdown')).map(c => new LangDrop(c))