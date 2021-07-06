const openBtn = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.close')
const list = document.querySelector('#page header ul')
list.style.display = 'none'
openBtn.addEventListener('click', function(){
    this.style.display = 'none'
    closeBtn.style.display = 'block'
    list.style.display = 'block'
})
closeBtn.addEventListener('click', function(){
    this.style.display = 'none'
    openBtn.style.display = 'block'
    list.style.display = 'none'
})
