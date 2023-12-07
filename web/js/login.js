const loginBtn = document.querySelector('#login')
const signBtn = document.querySelector('#signup')
const loginExit = document.querySelector('.login-exit')
const signExit = document.querySelector('.signup-exit')
const sidebar = document.querySelector('.sidebar')
const login = document.querySelector('.login')
const signup = document.querySelector('.signup')
const logTransf = document.querySelector('.login-transfer-link')
const signTransf = document.querySelector('.signup-transfer-link')

if (loginBtn) {
	loginBtn.addEventListener('click', function () {
		login.classList.toggle('active')
		body.classList.add('lock')
        sidebar.classList.add('lock')
	})
	loginExit.addEventListener('click', function () {
		login.classList.remove('active')
		body.classList.remove('lock')
        sidebar.classList.remove('lock')
	})
    if(signExit)
    {
        signExit.addEventListener('click', function () {
            signup.classList.remove('active')
            body.classList.remove('lock')
        })
    }
}
if (signBtn) {
	signBtn.addEventListener('click', function () {
		signup.classList.toggle('active')
		body.classList.add('lock')
	})
	signExit.addEventListener('click', function () {
		signup.classList.remove('active')
		body.classList.remove('lock')
	})
}
if (logTransf || signTransf) {
	logTransf.addEventListener('click', function () {
		login.classList.remove('active')
		signup.classList.add('active')
	})
	signTransf.addEventListener('click', function () {
		login.classList.add('active')
		signup.classList.remove('active')
	})
}