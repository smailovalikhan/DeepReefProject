// CUSTOM RANGE SLIDER

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

// CUSTOM SELECT

function select() {
  const selectHeaders = document.querySelectorAll('.select__header'),
        selectItems = document.querySelectorAll('.select__item')

  selectHeaders.forEach(item => item.addEventListener('click', selectToggle))
  selectItems.forEach(item => item.addEventListener('click', selectChoose))

  function selectToggle() {
    this.parentElement.classList.toggle('is-active')
  }

  function selectChoose() {
      let text = this.innerText,
          select = this.closest('.select'),
          trueSelect = select.querySelector('.true-select select'),
          currentOption = select.querySelector('.select__current'),
          newValue = this.dataset.value

      currentOption.innerText = text

      trueSelect.innerHTML = ''
      trueSelect.insertAdjacentHTML('afterbegin', `<option value="${newValue}"></option>`)
      trueSelect.selectedIndex = 0

      select.classList.remove('is-active')
  }
}

select()

// FORM SUCCESS POPUP

const txt = {
  en: 'Your form has been successfully completed',
  ru: 'Ваша форма успешно заполнена'
},
successPopupHTML = `
  <div id="form-success" class="popup full-hidden">
    <div class="content-container">
      <div class="close-button"><img src="img/close.svg" alt=""></div>

      <div class="success-icon">
        <svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="57.5" cy="57.5" r="55.5" stroke="#1E9A1C" stroke-width="3"/>
          <line x1="33.2659" y1="54.9079" x2="53.6407" y2="75.2826" stroke="#1E9A1C" stroke-width="3.58065"/>
          <line x1="51.1091" y1="75.2824" x2="85.6575" y2="40.734" stroke="#1E9A1C" stroke-width="3.58065"/>
        </svg>      
      </div>
      <p class="title">${txt[pageLang()]}</p>
    </div>
  </div>`

function setSuccessPopup(form, formPopupId) {
  form.addEventListener('submit', e => {
    e.preventDefault()

    // some code with form data

    popupHide(formPopupId)

    if(!document.querySelector('#form-success')) document.body.insertAdjacentHTML('beforeend', successPopupHTML)
    popup('form-success')
    popupShow('form-success')
  })
}

setSuccessPopup(document.querySelector('#recive-updates form'), 'recive-updates')