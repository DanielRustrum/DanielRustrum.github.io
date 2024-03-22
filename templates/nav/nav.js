let nav_dialog = document.querySelector("dialog")
let nav_button = document.querySelector("nav > button")
let close_nav_button = document.querySelector("#close-modal")

nav_button.addEventListener("click", event => {
    nav_dialog.showModal()
    event.preventDefault()
})

close_nav_button.addEventListener("click", event => {
    nav_dialog.close()
    event.preventDefault()
})

nav_dialog.addEventListener("click", event => {
    if (nav_dialog !== event.target) return;
    nav_dialog.close()
})