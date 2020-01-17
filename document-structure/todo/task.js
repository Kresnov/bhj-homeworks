const tasksList = document.querySelector('.tasks__list');
const tasksAdd = document.querySelector('.tasks__add');
const tasksInput = document.querySelector('.tasks__input');

tasksAdd.addEventListener('click', addTask);
tasksList.addEventListener('click', deleteTask);

function addTask(event) {
    event.preventDefault();
    
	if(tasksInput.value !== '') {
        let task = `<div class="task"><div class="task__title">${tasksInput.value}</div><a href="#" class="task__remove">&times;</a></div>`;
        tasksList.insertAdjacentHTML('beforeEnd', task);
        tasksInput.value = '';
    }
}

function deleteTask(event) {
    event.preventDefault();
    
    if (event.target.classList.contains("task__remove")) {    
        event.target.parentElement.remove();
    }
}