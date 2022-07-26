const btns = document.querySelectorAll('.to');

const body = document.querySelector('body');

btns.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    body.classList.toggle('open');
  });
});