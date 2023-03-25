
const textInput = document.querySelector('#textIn')
textInput.addEventListener('input', (event) => {
    if(textInput.value === '' || !textInput.value.includes('@')) {
		textInput.classList.add('ramecek')
	} else {
		textInput.classList.remove('ramecek')
	}
})

const formElm = document.querySelector('#Newsletter')
formElm.addEventListener('submit', (event) => {
	event.preventDefault()
    const textinput = document.querySelector('#textIn')
	const textIn = textinput.value
	formElm.textContent = `jste přihlášeni`
})