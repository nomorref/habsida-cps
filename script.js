const burgerBtn = document.querySelector('.nav-link--open')
const sidebar= document.querySelector('.sidebar')
const sidebarCloseBtn= document.querySelector('.close-menu-btn')


burgerBtn.addEventListener('click', function() {
    sidebar.style.display = 'flex'
})
sidebarCloseBtn.addEventListener('click', function(){
    sidebar.style.display='none'
})
