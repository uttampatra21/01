const sidemenu = document.querySelector("#sidemenu");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
  sidemenu.style.right = 0;
});

close.addEventListener("click", () => {
  sidemenu.style.right = "-200px";
});

sidemenu.addEventListener("click", () => {
  sidemenu.style.right = "-200px";
});

const yearInvoke = () => {
  const date = document.querySelector("#date");
  let localDate = new Date();
  let year = localDate.getFullYear();
  console.log(year);
  date.innerText = year;
};
yearInvoke();
