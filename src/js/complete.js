export const complete = () => {
  const $popUp = document.querySelector('.complete__pop-up')
  const $closeButton = $popUp.querySelector('.pop-up__close-btn')
  const $openButton = document.querySelector('.order__call-me')

  const $backdrop = $popUp.querySelector('.complete__backdrop')

  const openPopUp = () => {
    $popUp.classList.add('complete__pop-up--open')
  }

  const closePopUp = () => {
    $popUp.classList.remove('complete__pop-up--open')
  }

  $closeButton.addEventListener('click', closePopUp)
  $backdrop.addEventListener('click', closePopUp)
  $openButton.addEventListener('click', openPopUp)
}
