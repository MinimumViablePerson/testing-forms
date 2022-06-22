let addTodoForm = document.querySelector('.add-todo-form')
console.log(addTodoForm)

function createTodo(text) {
  let newTodoLi = document.createElement('li')
  newTodoLi.textContent = text

  let todoList = document.querySelector('.todo-list')
  todoList.append(newTodoLi)
}

addTodoForm.addEventListener('submit', function (event) {
  event.preventDefault()
  createTodo(addTodoForm.text.value)
  addTodoForm.reset()
})

let titleEl = document.querySelector('.title')
titleEl.addEventListener('click', function () {
  titleEl.textContent = 'Made you look!! 😏'
  createTodo('NICE, you found a secret feature!')
})
