export const popup = () => {
  const $popUp = document.querySelector('.order__pop-up')
  const $closeButton = $popUp.querySelector('.pop-up__close-btn')
  const $openButton = document.querySelector('.hero__button')

  const $backdrop = $popUp.querySelector('.order__backdrop')

  const openPopUp = () => {
    $popUp.classList.add('order__pop-up--open')
  }

  const closePopUp = () => {
    $popUp.classList.remove('order__pop-up--open')
  }

  $closeButton.addEventListener('click', closePopUp)
  $backdrop.addEventListener('click', closePopUp)
  $openButton.addEventListener('click', openPopUp)
}
