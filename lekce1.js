// // UKOL1

// const obr = document.querySelector('.auto')
// document.querySelector('#sipka1').addEventListener('click', () => {
//     obr.style.marginRight = "50px";
//  })
//  document.querySelector('#sipka2').addEventListener('click', () => {
//     obr.style.marginLeft = "50px";
//  })
function moveImage(direction) {

	var img = document.getElementById("myImage");

	var currentMarginLeft = parseInt(window.getComputedStyle(img).marginLeft);
	var currentMarginRight = parseInt(window.getComputedStyle(img).marginRight);

	if (direction === 'left') {
	  img.style.marginLeft = (currentMarginLeft - 100) + "px";
	  img.style.marginRight = (currentMarginRight + 100) + "px";
	} else if (direction === 'right') {
	  img.style.marginLeft = (currentMarginLeft + 100) + "px";
	  img.style.marginRight = (currentMarginRight - 100) + "px";
	}
  }
// document.querySelector('#sipka2').addEventListener('click', () => {
//     const obr = document.querySelector('.auto')
//     obr.classList.add(posunDoleva);
//  });

// function moveImageR() {
// 	var img = document.getElementById(".auto");
	
// 	var currentPos = parseInt(img.style.left);

// 	img.style.left = (currentPos + 100) + "px";
//   }
//   function moveImageL() {
// 	var img = document.getElementById(".auto");
	
// 	var currentPos = parseInt(img.style.left);

// 	img.style.left = (currentPos + 100) + "px";
//   }
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
