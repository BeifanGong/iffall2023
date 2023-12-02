const menuButton = document.getElementById('menu')
const openedNavBar = document.getElementById('nav-bar-opened')

let menuOpen = false

menuButton.addEventListener('click', () => {
    if(menuOpen) {
        menuButton.classList.add('fa-bars')
        menuButton.classList.remove('fa-xmark')
        openedNavBar.classList.add('fade-out')
        openedNavBar.classList.remove('fade-in')
        openedNavBar.style.opacity = '0'
        openedNavBar.style.zIndex = '-999'
    } else {
        menuButton.classList.add('fa-xmark')
        menuButton.classList.remove('fa-bars')
        openedNavBar.classList.add('fade-in')
        openedNavBar.classList.remove('fade-out')
        openedNavBar.style.opacity = '1'
        openedNavBar.style.zIndex = '999'
    }
    menuOpen = !menuOpen
})