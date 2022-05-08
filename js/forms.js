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