export const popup = ($popUp, $openButton) => {
  const $closeButton = $popUp.querySelector('[data-popup-close]')
  const $backdrop = $popUp.querySelector('[data-backdrop]')

  const openPopUp = () => {
    $popUp.classList.add('e-open')
    document.body.style.overflow = 'hidden'
  }

  const closePopUp = () => {
    $popUp.classList.remove('e-open')
    document.body.style.overflow = 'initial'
  }

  $closeButton.addEventListener('click', closePopUp)
  $backdrop.addEventListener('click', closePopUp)

  if ($openButton) {
    $openButton.addEventListener('click', openPopUp)
  }

  return {
    openPopUp,
    closePopUp,
  }
}
