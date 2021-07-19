document.querySelector('main').remove()

body = document.getElementsByTagName('body')
newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.id = 'victory'
newHeader.className = 'victory'
newHeader.innerHTML = 'Some interesting text'