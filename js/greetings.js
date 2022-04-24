const loginForm = document.querySelector("#login-form");
const inputName = document.querySelector("#login-form input:first-child");
const greetings = document.querySelector("#greetings");

function idSubmitHandler(e){
    e.preventDefault();
    const id = inputName.value;
    inputName.value = "";
    // console.log(id);
    paintGreetings(id);
    localStorage.setItem("id", id); // save the id in local storage
}

function paintGreetings(id){
    loginForm.classList.add("hidden");
    greetings.innerText = `Hello! ${id}. Welcome to my homepage!`
    greetings.classList.remove("hidden");
}

const localId = localStorage.getItem("id");
if(localId !== null){
    // if localId is not empty, show the greetings
    paintGreetings(localId);
}else{
    // if localId is empty, show the loginForm
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", idSubmitHandler);
}

