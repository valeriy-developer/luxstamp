import {menu} from './burger.js'

import {form} from './form.js'

menu()
form()

const lerp = (a, b, n) => {
  return a * (1 - n) + b * n
}

const customCursor = () => {
  let innertiaX = 0
  let innertiaY = 0

  let offsetX = 0
  let offsetY = 0

  const $cursor = document.querySelector('[data-cursor]')
  const $links = document.querySelectorAll('a')
  const coords = $cursor.getBoundingClientRect()

  const onMouseEnter = () => {
    $cursor.classList.add('cursor--hovered')
  }

  const onMouseLeave = () => {
    $cursor.classList.remove('cursor--hovered')
  }

  const onMouseMove = e => {
    offsetX = e.clientX - coords.width / 2
    offsetY = e.clientY - coords.height / 2

    // if (e.target.tagName === 'A') {
    //   $cursor.classList.add('cursor--hovered')
    // } else {
    //   $cursor.classList.remove('cursor--hovered')
    // }
  }

  document.addEventListener('mousemove', onMouseMove)

  $links.forEach(link => {
    link.addEventListener('mouseenter', onMouseEnter)
    link.addEventListener('mouseleave', onMouseLeave)
  })

  const animate = () => {
    innertiaX = lerp(offsetX, innertiaX, 0.92)
    innertiaY = lerp(offsetY, innertiaY, 0.92)

    $cursor.style.left = innertiaX + 'px'
    $cursor.style.top = innertiaY + 'px'

    window.requestAnimationFrame(animate)
  }

  animate()
}

window.addEventListener('load', customCursor)
