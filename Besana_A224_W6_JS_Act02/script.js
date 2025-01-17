const txtToDoItem = document.getElementById("txtToDoItem")
const btnAddTask = document.getElementById("btnAddTask")
const lstToDos = document.getElementById("lstToDos")

let todos = []

function display()
{
    let todoItems = ""
    for(let i=0;i<todos.length;i++)
    {
        console.log(todos[i])
        todoItems += "<li>" + todos[i] + "</li>"
    }
    lstToDos.innerHTML = todoItems
}

btnAddTask.addEventListener("click", ()=>{
    // logic
    console.log(txtToDoItem.value)
    todos.push(txtToDoItem.value)
    console.log(todos)

    display()
})

// todos.push("Task 1")
// todos.push("Task 2")
// todos.push("Task 3")

// console.log(todos)
// // console.log(todos.length)
// // console.log(todos[0])
// // console.log(todos[todos.length-1])
// // let index = 2
// // console.log(todos[index])