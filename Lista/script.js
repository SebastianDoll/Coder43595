//Agregar una tarea nueva

let addButton = document.getElementById("add-button")

addButton.addEventListener("click", addToDoItem)

let inputBox = document.getElementById("todo-entry-box")

function addToDoItem(){

    let itemText = inputBox.value
    newToDoItem(itemText, false)
    inputBox.value = ""
}

let toDoList = document.getElementById("todo-list")

function newToDoItem(text, completed){
    let toDoItem = document.createElement("li")
    toDoItem.innerText = text

    if(completed){
        toDoItem.classList.add("completed")
    }

    toDoList.append(toDoItem)
    toDoItem.addEventListener("click", toggleItemState)
}

//Cambio de tarea a completada y viceversa

function toggleItemState(){
    if(this.classList.contains("completed")){
        this.classList.remove("completed")
    }
    else{
        this.classList.add("completed")
    }
}

//Eliminar tareas completadas

let clearButton = document.getElementById("clear-button")

clearButton.addEventListener("click", clearCompleted)

function clearCompleted(){

    let completedItems = toDoList.getElementsByClassName("completed")

    while(completedItems.length > 0){
        completedItems[0].remove();
    }
}

//Eliminar lista (NO HACER!!) --> Elimina el elemento padre y luego no podemos agregar tareas

/* let emptyButton = document.getElementById("empty-button")

emptyButton.addEventListener("click", emptyList)

function emptyList(){

    toDoList.remove()

} */


//Eliminar lista (Correcto!)

let emptyButton = document.getElementById("empty-button")

emptyButton.addEventListener("click", emptyList)

function emptyList(){

    toDoList.innerHTML = ""

}

//Guardar Lista en el Storage

let saveButton = document.getElementById("save-button")

saveButton.addEventListener("click", saveList)

function saveList(){

    let items = []

    for(let i = 0; i < toDoList.children.length; i++){
        let item = toDoList.children[i]
        console.log(item)

        let itemInfo = {
            task: item.innerText,
            completed: item.classList.contains("completed")
        }

        items.push(itemInfo)
    }

    localStorage.setItem("list", JSON.stringify(items))
}

// Cargar lista del storage

function loadList(){
    let list = JSON.parse(localStorage.getItem("list"))
    for(let i = 0; i < list.length; i++){
        newToDoItem(list[i].task, list[i].completed)
    }
}

loadList()
console.log()