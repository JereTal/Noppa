const div = document.querySelector('div')
const img = document.querySelector('img')

div.addEventListener('click', () => {
    const random_number = Math.floor(Math.random() * 6) + 1
    img.src = './img/d' + random_number + '.png'
})