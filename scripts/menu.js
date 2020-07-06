var menuBtn = document.querySelector('.nav-top__menu-btn');
var menuList = document.querySelector('.nav-list');



  menuBtn.addEventListener('click' , function(){
    menuList.classList.toggle('nav-list--open');
    menuList.classList.toggle('nav-list--close');
  });






// if(menuList.classList.contains('nav-list--open')){
//   menuList.classList.remove('nav-list--open');
//   menuList.classList.add('nav-list--close');
//   console.log('menu was open');
// }
