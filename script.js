const inputMenu = document.querySelector("#menu-checkbox")
const mobileMenu = document.querySelector("#menu")

const openCloseMenu = () => {
  if (inputMenu.checked) mobileMenu.classList.toggle('checked')
  else mobileMenu.classList.toggle("unchecked")
}
openCloseMenu() // adicionar o script no index.html