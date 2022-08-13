const text = document.querySelector(".header");

const bilet = 500;
const mehmonxona = 250;
const sayr = 120;

const dollarSum = 10650.34;
const euroSum = 11650.03;

const kerakliPul = (bilet + mehmonxona) * dollarSum + euroSum * sayr;

const sizningPul = prompt("Sizda qancha pul bor ?");
if (sizningPul >= kerakliPul) {
  text.textContent = "OQ YO'L !!! \n  MAROQLI HORDIQ OLING";
} else {
  text.textContent = "SIZDA MABLAG' YETARLI EMAS !";
}
