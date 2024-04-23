const inputUser  = document.getElementById("inputUser")
const  submit = document.getElementById("submit");
let todoList = document.getElementById("todoList");
let buttonContainer = document.getElementById("buttonContainer");

let todosContainer = document.querySelectorAll(".todosContainer");
const todo = document.getElementsByClassName("todo");
const deleteTodo = document.getElementsByClassName("delete");
const checkTodo = document.getElementsByClassName("check");
todosContainer = Array.from(todosContainer);

inputUser.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addTodo()
    }
});

submit.addEventListener('click',(event)=>{
    event.preventDefault();  
    addTodo();  
})


function addTodo(){
    let notesText = inputUser.value;
    var div = document.createElement("div");
    div.classList.add("todosContainer")
 
    div.innerHTML = `
    <div class="todo">${notesText}</div>
    <div id="buttonContainer">
      <button class="delete">Delete</button>
      <button class="check">Check</button>
    </div>` ;
    todoList.appendChild(div);
    inputUser.value = "";
}




document.addEventListener('click',(e)=>{
    if(e.target.className === "delete"){
        e.target.parentNode.parentNode.remove();
    }
    if(e.target.className === "check"){
        // e.target.parentNode.parentNode.classList.toggle("completed");
        e.target.parentNode.parentNode.children[0].classList.toggle("completed");
        console.log(e.target.parentNode.parentNode.children[0]);
    }
})


