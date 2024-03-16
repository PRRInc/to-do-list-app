
const form = document.querySelector("form");

function addDeleteToButton (bttn) {
    bttn.addEventListener("click", event => {
        event.target.parentNode.remove();
    })
}

const buttons = document.querySelectorAll(".to-dos__delete-button");

for (const button of buttons) {
    addDeleteToButton(button);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const todoText = form.toDo.value;
  const todoLi = document.createElement("li");
  todoLi.innerText = todoText;
  const button = document.createElement("button");
  todoLi.appendChild(button);
  document.querySelector("ul").appendChild(todoLi);

  strikeThru(todoLi);



  todoLi.classList.add("to-dos__list-item");
  button.classList.add("to-dos__delete-button");
  button.innerText = "Delete";
  addDeleteToButton(button);

  form.reset();

});

const items = document.querySelectorAll("li");
function strikeThru (li) {
    li.addEventListener("click", (event) => {
        event.target.classList.toggle("strike-thru");
    })
}
for (let item of items) {
    strikeThru(item)
}