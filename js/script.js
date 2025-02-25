document.addEventListener('DOMContentLoaded', () => {
	const burgerBtn = document.querySelector('.burger-btn')
	const navBox = document.querySelector('.nav__box')
	const q = document.querySelectorAll('.q')
	const a = document.querySelectorAll('.a')
	const arr = document.querySelectorAll('.arrow')
	burgerBtn.addEventListener('click', () => {
		navBox.classList.toggle('active')
	})
	for (let i = 0; i < q.length; i++) {
		q[i].addEventListener('click', () => {
			a[i].classList.toggle('a-opened')
			arr[i].classList.toggle('arrow-rotated')
		})
	}
})
