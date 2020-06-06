
var modal = document.getElementById('modal');
var openModal = document.getElementById('openModal');
var closeModal = document.getElementById('closeModal');
var btnLogin = document.getElementById('btnLogin');
var textLogin = document.getElementById('btnLogin');

btnLogin
openModal.addEventListener('click',function(){
    modal.style.display = 'flex';
})
closeModal.addEventListener('click',function(){
    modal.style.display = 'none';
})

btnLogin.addEventListener('click',function(){
    textLogin.querySelector('span').style.display = 'none';
    textLogin.querySelector('.loader').style.display = 'block';
})

