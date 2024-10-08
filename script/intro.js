const animatedText = document.getElementById('animatedText');
const text = document.querySelector("text");
window.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        window.scrollTo(0, 0);
    },100);

    animatedText.addEventListener('animationend', (event) => {

        if (event.animationName === 'fill-animation') {
            document.querySelector("body").style.background = "#FFF6EF";
            document.querySelector(".header__title").style.animation = "moveToHeader 1s ease forwards";
            text.style.fontSize = "10vw";
            text.style.fill = "#926B45";
            text.style.stroke = "#926B45";

            document.querySelectorAll(".card").forEach(t => {
                t.style.opacity = "1";
            });
            setTimeout(() => {
                document.querySelector(".header__title").style.zIndex = "-1";
                document.querySelector("body").style.overflow = "visible";
                // document.querySelector("text").style.textDecoration = "underline";
            },1000);
            setTimeout(() => {
                const text = document.querySelector("#animatedText");
                text.style.height = "150px";
            }, 1500)

        }
    });

});

