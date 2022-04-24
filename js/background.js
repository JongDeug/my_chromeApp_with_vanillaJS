const images = [
    "01.png",
];

function paintBackgroundImg(){
    const index = Math.floor(Math.random()*images.length);
    document.body.style.background = `url(../img/${images[index]}) center top`;
    document.body.style.backgroundSize = "cover";
}

paintBackgroundImg();