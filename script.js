// Abrir e fechar o menu

const BTN_MOBILE = document.getElementById('btn-mobile') 

function toggleMenu(event) {
    if(event.type === 'touchstart') {
        event.preventDefault()
    }
    const sidebar = document.getElementById('sidebar') 
    sidebar.classList.toggle('active')
}

BTN_MOBILE.addEventListener('click', toggleMenu)
BTN_MOBILE.addEventListener('touchstart', toggleMenu)