function translatePage(lang) {
  for(const key in translates[lang]) {
    const nodes = document.querySelectorAll(`[data-t="${key}"]`)
    if(nodes.length > 0) {  
      nodes.forEach(node => {
        if(['INPUT', 'TEXTAREA'].reduce((c, itm) => node.nodeName === itm ? 1 : c, 0)) {
          node.placeholder = translates[lang][key]
        }
        else node.innerHTML = translates[lang][key]
      })
    }
  }
}

function setTranslate(lang) {
  console.log(lang)
  translatePage(lang)
  recheckK()
}

if(!localStorage.getItem('pageLang')) localStorage.setItem('pageLang', 'en')

function pageLang() {
  return localStorage.getItem('pageLang')
}

setTranslate(pageLang())

function LangDrop(container) {
  this.div = container

  this.toggleDrop = () => {
    this.div.classList.toggle('active')
  }

  this.changeLang = lang => {
    const curLang = this.div.querySelector('.main p[data-lang]')

    if(curLang.dataset.lang !== lang) {

      const nextLang = this.div.querySelector(`p[data-lang="${lang}"]`)

      if(nextLang) {
        nextLang.insertAdjacentElement('afterend', curLang)
        this.div.querySelector('.main').insertAdjacentElement('afterbegin', nextLang)

        localStorage.setItem('pageLang', lang)
        setTranslate(lang)
      }
    }
  }

  this.div.onclick = e => {
    if(e.target.dataset.lang && e.target.dataset.lang !== pageLang()) dropLangs.forEach(dl => dl.changeLang(e.target.dataset.lang))
    this.toggleDrop()
  }

  this.changeLang(pageLang())
}

const dropLangs = Array.from(document.querySelectorAll('.language-dropdown')).map(c => new LangDrop(c))