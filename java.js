
console.log("1. ayımıza özel sitemiz başladı ❤️");

const heart = document.getElementById("heart");
const secret = document.getElementById("secret");
const muzik = document.getElementById("muzik");

let acildi = false;

heart.addEventListener("click", function () {

    secret.classList.toggle("active");

    if (!acildi) {
        muzik.play();
        acildi = true;
    }

});

