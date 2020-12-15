/*
<div class="todo">
  <h3>Faire la vaisselle</h3>
  <button>X</button>
</div> 
*/

function createTodo(todoLabel) {
  // DECLARATION
  const divTodo = document.createElement('div'); 
  // <div></div> 
  const h3Todo = document.createElement('h3');
  // <h3></h3>
  const btTodo = document.createElement('button');
  // <button></button>
  const txtTodo = document.createTextNode(todoLabel);
  // Faire la vaisselle (exemple)
  const txtBtTodo = document.createTextNode("X");
  // X
  const divTodos = document.querySelector('.todos');
  // <div class="todos"></div> (existe déjà dans ton code html)
  
  // CONFIGURATION
  divTodo.className = 'todo';
  // <div class="todo"></div> 
  
  // IMBRICATION
  h3Todo.appendChild(txtTodo);
  // <h3>Faire la vaisselle (exemple)</h3>
  divTodo.appendChild(h3Todo);
  // <div class="todo"><h3>Faire la vaisselle (exemple)</h3></div> 
  divTodo.appendChild(btTodo);
  // <div class="todo"><h3>Faire la vaisselle (exemple)</h3><button>X</button></div> 
  btTodo.appendChild(txtBtTodo);
  // <button>X</button>
  
  // INSERTION DANS LE DOM
  divTodos.appendChild(divTodo);
  // <div class="todos"><div class="todo"><h3>Faire la vaisselle (exemple)</h3><button>X</button></div></div>
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
