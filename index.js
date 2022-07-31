// const o = document.querySelector('.open');
// const x = document.querySelector('.close');

// console.log(o,x);

// o.addEventListener('click',()=>{
//  o.classList.toggle('ouvrir');
//  x.classList.toggle('fermer');
// });

let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");

toggle.addEventListener('click',()=>{
 body.classList.toggle('open');
});