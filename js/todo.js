const todoForm = document.querySelector("#todo-form");
const inputTodo = document.querySelector("#todo-form input");

let todoArray = [];


// paint todo list
function paintTodoList(todoObj){
    const ul = document.querySelector("#todo-list");
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    button.innerText = "X";
    li.append(span, button);
    ul.appendChild(li);

    li.id = todoObj.id;
    span.innerText = todoObj.todo; // todo in ul > li > span 
    
    // button event to delete todo list
    button.addEventListener("click", deleteTodoList);
}


// delete todo list, have to sync with localStorage
function deleteTodoList(event){
    const li = event.target.parentElement;
    li.remove();
    
    todoArray = todoArray.filter((element) => element.id !== li.id);
    saveTodoList();
}

// save todo list, just made it because of repetition
function saveTodoList(){
    localStorage.setItem("todos", JSON.stringify(todoArray));
}

// set the initial todo list
function setTodoList(){
    todoArray.forEach(element => paintTodoList(element));
}


function submitTodoHandler(e){
    e.preventDefault();
    const todoObj = {
        id : Date.now().toString(), //caution, no Date()
        todo : inputTodo.value
    }
    inputTodo.value = "";
    paintTodoList(todoObj);

    // save todo in todoArray and localStorage
    todoArray.push(todoObj);
    saveTodoList();
}
// it must be positioned here
todoForm.addEventListener("submit", submitTodoHandler);


const isEmptyLocalTodo = JSON.parse(localStorage.getItem("todos"));
if(isEmptyLocalTodo !== null){
    todoArray = isEmptyLocalTodo;
    setTodoList();
} 

