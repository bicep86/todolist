function createTodo(todoLabel) {
  // DECLARATION
  const divTodo = document.createElement('div'); 
  const h3Todo = document.createElement('h3');
  const btTodo = document.createElement('button');
  const txtTodo = document.createTextNode(todoLabel);
  const txtBtTodo = document.createTextNode("X");
  const divTodos = document.querySelector('.todos');
  
  // CONFIGURATION
  divTodo.className = 'todo';
  btTodo.onclick = function() {
      console.log("Bouton cliqué", todoLabel);
  };

  // IMBRICATION
  h3Todo.appendChild(txtTodo);
  divTodo.appendChild(h3Todo);
  divTodo.appendChild(btTodo);
  btTodo.appendChild(txtBtTodo);
  
  // INSERTION DANS LE DOM
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
