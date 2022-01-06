import {validation} from './validation.js'
import {popup} from './popup.js'

export const form = () => {
  const $form = document.querySelector('.form')
  const $inputs = $form.querySelectorAll('.input')
  const $wrapperClass = '.input-wrapper'

  const {closePopUp} = popup(
    document.querySelector('[data-form-popup]'),
    document.querySelector('[data-open-popup]')
  )
  const {openPopUp} = popup(document.querySelector('[data-complete-popup]'))

  const validateInputs = el => {
    if (el.dataset.validation === 'required') {
      if (validation.required(el.value)) {
        el.closest($wrapperClass).classList.add('error')
        return true
      } else {
        el.closest($wrapperClass).classList.remove('error')
        return false
      }
    }
  }

  const onSubmit = e => {
    e.preventDefault()
    const errors = []
    const formData = {}

    $inputs.forEach(input => {
      const isError = validateInputs(input)

      errors.push(isError)
    })

    if (!errors.includes(true)) {
      $inputs.forEach(input => {
        formData[input.name] = input.value
        input.value = ''
        input.blur()
        input.closest($wrapperClass).classList.remove('active')
        closePopUp()
        openPopUp()
      })

      console.log(formData)
    }
  }

  const onFocus = e => {
    const el = e.currentTarget
    el.closest($wrapperClass).classList.add('active')
  }

  const onBlur = e => {
    const el = e.currentTarget
    if (el.value.trim() === '') {
      el.closest($wrapperClass).classList.remove('active')
    }
  }

  const onInput = e => {
    const el = e.currentTarget

    validateInputs(el)
  }

  $inputs.forEach(input => {
    input.addEventListener('focus', onFocus)
    input.addEventListener('blur', onBlur)
    input.addEventListener('input', onInput)
  })

  $form.addEventListener('submit', onSubmit)

  return () => {
    $inputs.forEach(input => {
      input.removeEventListener('focus', onFocus)
      input.removeEventListener('blur', onBlur)
      input.removeEventListener('input', onInput)
    })

    $form.removeEventListener('submit', onSubmit)
  }
}
