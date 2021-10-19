/*
    Пароль на странице
*/
const password = prompt('Введіть пароль');
if (password == "111") {  
         window.onload;
} else {  
      window.location.href = 'https://google.com';  
}
/*
    Бургер меню
*/
var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});







