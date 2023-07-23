const sidemenu = document.querySelector("#sidemenu");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () =>{
    sidemenu.style.right = 0;
});

close.addEventListener("click", () =>{
    sidemenu.style.right = "-200px";
});

sidemenu.addEventListener("click", () =>{
    sidemenu.style.right = "-200px";
});


// !

var typed = new Typed('.element', {
    strings: ["This site is under maintenance."],
    typeSpeed: 50,
    backSpeed: 40,
    loop: true,
  });

//   !

