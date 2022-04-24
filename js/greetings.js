const login = document.querySelector("#login");
const loginForm = document.querySelector("#login-form");
const inputName = document.querySelector("#login-form #inputName");
const greetings = document.querySelector("#greetings");

function idSubmitHandler(e){
    const id = inputName.value;
    inputName.value = "";
    // console.log(id);
    paintGreetings(id);
    localStorage.setItem("id", id); // save the id in local storage
}

function paintGreetings(id){
    login.classList.add("hidden");
    greetings.innerText = `Hello! ${id}. Make It A Great Day!`
    greetings.classList.remove("hidden");
}

const localId = localStorage.getItem("id");
if(localId !== null){
    // if localId is not empty, show the greetings
    paintGreetings(localId);
    isLogin = true;
}else{
    // if localId is empty, show the loginForm
    login.classList.remove("hidden");
    loginForm.addEventListener("submit", idSubmitHandler);
    isLogin = false;
}

if(isLogin){
    const infoDiv = document.querySelector(".info");
    infoDiv.classList.remove("hidden");
}