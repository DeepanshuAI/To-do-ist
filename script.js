// script.js

// Add a task to the list
function addTask() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();

    if (!task) {
        alert('Please enter a task!');
        return;
    }

    const todoList = document.getElementById('todoList');

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');

    // Add the task text and delete button with an SVG
    listItem.innerHTML = `
        <span>${task}</span>
        <button onclick="removeTask(this)">${deleteIcon()}</button>
    `;

    todoList.appendChild(listItem);
    input.value = '';
}

// Remove a task from the list
function removeTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}

// Custom SVG for delete button
function deleteIcon() {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="#ffffff">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm3-9h2v7H9v-7zm4 0h2v7h-2v-7zm5-5H8l-1-1H4v2h16V4h-3z"/>
        </svg>
    `;
}
