// UKOL1
document.querySelector('#sipka1').addEventListener('click', () => {
	const obr = document.querySelector('.auto')
	obr.style.left = "20px";
 })
document.querySelector('#sipka2').addEventListener('click', () => {
    const obr = document.querySelector('.auto')
    obr.style.right = "20px";
 });



//UKOL2
const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}

document.querySelector('#form').addEventListener('submit', (e) => {
	e.preventDefault()

	const emailInput = document.querySelector('#email')
	const passwordInput = document.querySelector('#password')
	const container = document.querySelector('.container')
	const status = document.querySelector('#status')

	if ( emailInput.value === user.email && passwordInput.value === user.password
	) {
		container.innerHTML = `<h1>Přihlášený uživatel: ${user.name}</h1>`
	} else {
		status.textContent = 'Neplatné přihlašovací údaje'
	}
})
