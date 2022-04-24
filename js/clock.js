const clock = document.querySelector("#clock");

function paintClock(){
    const hours = new Date().getHours().toString().padStart(2, "0");
    const minutes = new Date().getMinutes().toString().padStart(2, "0");
    const second = new Date().getSeconds().toString().padStart(2, "0");
    
    clock.innerText = `${hours} : ${minutes} : ${second}`;
}

paintClock();
setInterval(paintClock, 1000);