let navPage = document.querySelector('.page-nav');
let navToggle = document.querySelector('.page-nav__toggle');

navPage.classList.remove('page-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navPage.classList.contains('page-nav--closed')) {
    navPage.classList.remove('page-nav--closed');
    navPage.classList.add('page-nav--opened');
  } else {
    navPage.classList.add('page-nav--closed');
    navPage.classList.remove('page-nav--opened');
  }
});


window.addEventListener('scroll', () => {
  document.querySelector('.sticky').classList.toggle('scrolled', window.scrollY > 50);
});

const details = document.querySelectorAll('details');
details.forEach(item => {

  item.addEventListener('click', (e) => {

    e.preventDefault();
    
    const openItem = document.querySelector('details[open]');
    
    if (openItem) openItem.open = false;

    if (openItem !== item) item.open = true 
  })
})

document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal').style.marginLeft = '0px';
  });
});
