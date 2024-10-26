function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
    
    if (todoInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item with the task
    const listItem = document.createElement("li");
    listItem.textContent = todoInput.value;

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = () => {
        todoList.removeChild(listItem);
    };

    listItem.appendChild(removeButton);
    todoList.appendChild(listItem);

    // Clear the input
    todoInput.value = "";
}

