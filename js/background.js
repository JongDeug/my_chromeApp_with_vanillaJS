const images = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
]

function paintBackgroundImg(){
    const index = Math.floor(Math.random()*images.length);
    document.body.innerHTML += `<img src="../img/${images[index]}">`;
}

paintBackgroundImg();