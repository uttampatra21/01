const header = document.querySelector("header");
header.innerHTML = `
<nav>
<h2>Digital <span>Hub</span></h2>

<ul id="sidemenu">
    <i id="close" class="bi bi-box-arrow-in-right"></i>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About Us</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contect</a></li>
    <div class="log">
    <a class="signup" href="#">Registar</a>
</div>
</ul>
<i id="open" class="bi bi-list"></i>

</nav>
`;

const sidemenu = document.querySelector("#sidemenu");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () =>{
    sidemenu.style.right = 0;
});

close.addEventListener("click", () =>{
    sidemenu.style.right = "-200px";
});
// const close = () =>{
//     side.style.right = -200;
// }