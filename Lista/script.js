//Agregar una tarea nueva

let addButton = document.getElementById("add-button")

addButton.addEventListener("click", addToDoItem)

let inputBox = document.getElementById("todo-entry-box")

function addToDoItem(){

    let itemText = inputBox.value
    newToDoItem(itemText)
    inputBox.value = ""
}

let toDoList = document.getElementById("todo-list")

function newToDoItem(text){
    let toDoItem = document.createElement("li")
    toDoItem.innerText = text

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