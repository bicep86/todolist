/*
<div class="todo">
  <h3>Faire la vaisselle</h3>
  <button>X</button>
</div> 
*/

function createTodo(todoLabel) {
  // declaration
  const divTodo = document.createElement('div');  
  const h3Todo = document.createElement('h3');
  const btTodo = document.createElement('button');
  const txtTodo = document.createTextNode(todoLabel);
  const txtBtTodo = document.createTextNode("X");
  const divTodos = document.querySelector('.todos');
  
  // configuration
  divTodo.className = 'todo';
  
  // imbrication
  h3Todo.appendChild(txtTodo);
  divTodo.appendChild(h3Todo);
  divTodo.appendChild(btTodo);
  btTodo.appendChild(txtBtTodo);
  
  // insertion dans le DOM
  divTodos.appendChild(divTodo);
}

document.formAddTodo.onsubmit = function(e) {
  e.preventDefault();
  const inputUser = document.formAddTodo.todoTxt.value;
  if (inputUser.length < 3) {
    alert("Votre saisie est icomplète!");
  } 
  else { 
    createTodo(inputUser);
    document.formAddTodo.reset();
  }
}
