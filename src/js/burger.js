export const menu = () => {
  const $burger = document.querySelector('.header__burger')
  const $navMenu = document.querySelector('.header__menu')

  const toggleBurger = () => {
    $burger.classList.toggle('header__burger-active')
    $navMenu.classList.toggle('header__menu-active')
  }

  $burger.addEventListener('click', toggleBurger)
}

