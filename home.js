const home = document.querySelector('#home');
home.innerHTML = `
<div class="right_cont">
            <div>
                <h4 class="white"><span >Warning : </span>  <span class="element"></span></h4>
                <h1 class="tittle">GROW YOUR BUSSINESS WITH US!</h1>
            </div>
            <div class="img_tittle">
                <h2>NO.1 <span>DIGITAL MARKETING</span> AGENCY</h2>
            </div>
            <div>
                <p>We Deliver Quality Creative Services and All Online Business Requirements to Our Clients. Build Your Performance Marketing Startegy & Increase Your Return on investment.</p>
            </div>
            <div class="touch">
                <a href="#">GET IN TOUCH</a>
            </div>
            <div class="media">
                <i class="bi bi-instagram"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-whatsapp"></i>
                <i class="bi bi-twitter"></i>
            </div>
        </div>
        <div class="left_cont">
            <div class="img">
                <img class="git" src="img/download.png">
            </div>
        </div>
`;
var typed = new Typed('.element', {
    strings: ["This site is under maintenance."],
    typeSpeed: 50,
    backSpeed: 40,
    loop: true,
  });