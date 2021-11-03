document.addEventListener('DOMContentLoaded', () => {

  const inputElement = document.getElementById('selector') // ищем наш единственный input
  const maskOptions = { // создаем объект параметров
    mask: '+{7}(000)000-00-00' // задаем единственный параметр mask
  }
  IMask(inputElement, maskOptions) // запускаем плагин с переданными параметрами

})

var passwordField = document.querySelector('.password');
var show = document.querySelector('.show');
var hide = document.querySelector('.hide');

show.onclick = function(){
	passwordField.setAttribute("type", "text");
	show.style.display = "none";
	hide.style.display = "block";
}

hide.onclick = function(){
	passwordField.setAttribute("type", "password");
	hide.style.display = "none";
	show.style.display = "block";
}

