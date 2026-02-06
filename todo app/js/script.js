const saveTask = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const getTasks = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const listElement = document.querySelector('#tasks');

    let tasks = getTasks();

    tasks.forEach((task) => {
        createTask(task);
    })

     function createTask(task){

        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const taskContentElement = document.createElement('div');
        taskContentElement.classList.add('content');

        taskElement.appendChild(taskContentElement);
        const taskInputElement = document.createElement('input');
        taskInputElement.classList.add('text');
        taskInputElement.type = 'text';
        taskInputElement.value = task;
        taskInputElement.setAttribute('readonly', 'readonly');

        taskContentElement.appendChild(taskInputElement);

        const taskActionsElement = document.createElement('div');
        taskActionsElement.classList.add('actions');

        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.innerText = 'Edit';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerText = 'Delete';

        taskActionsElement.appendChild(editButton);
        taskActionsElement.appendChild(deleteButton);

        taskElement.appendChild(taskActionsElement);

        listElement.appendChild(taskElement);

        input.value = '';

        editButton.addEventListener('click', () => {
            if(editButton.innerText.toLocaleLowerCase() === 'edit'){
                taskInputElement.removeAttribute('readonly');
                taskInputElement.focus();
                editButton.innerText = 'Save';
            }else{
                taskInputElement.setAttribute('readonly', 'readonly');
                editButton.innerText = 'Edit';

                const index = tasks.indexOf(task);
                tasks[index] = taskInputElement.value;
                saveTask(tasks);
            }
        });

        deleteButton.addEventListener('click', () => {
            listElement.removeChild(taskElement);
            saveTask(tasks);

            tasks = tasks.filter(t => t !== task);
            saveTask(tasks);
    });

    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;


        if(!task){
            alert("Please fill out the task");
            return;
        }

        tasks.push(task);
        saveTask(tasks);
        createTask(task);

       input.value = '';
    });
})