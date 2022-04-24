const images = [
    "01.jpg",
];

function paintBackgroundImg(){
    const index = Math.floor(Math.random()*images.length);
    // document.body.innerHTML += `<img src="../img/${images[index]}">`;
    document.body.style.background = `url(../img/${images[index]}) center top`;
    document.body.style.backgroundSize = "cover";
}

paintBackgroundImg();