//UKOL1
document.querySelector('#sipka1').addEventListener('click', () => {
	const obr = document.querySelector('.auto')
	obr.classList.add('btn-sipka--vlevo')
})
document.querySelector('#sipka2').addEventListener('click', () => {
	const obr = document.querySelector('.auto')
	obr.classList.add('btn-sipka--vpravo')
});
//UKOL2
const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
};
const controlMail = document.querySelector('#email')
const controlHeslo = document.querySelector('#heslo')
const formText = document.querySelector('.formText')

const formElm = document.querySelector('#registration')
formElm.addEventListener('submit', (event) => {
	event.preventDefault()
    if( user.email === controlMail.value && user.password === controlHeslo.value
    ) { 
    
        alert(`<h1>Přihlášený uživatel: ${user.name}</h1>`)
    } else {
        formText.textContent = 'Neplatné přihlašovací údaje'
    }
})
