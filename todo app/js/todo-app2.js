window.addEventListener('load', () => {
    const form = document.querySelector('#task-input-form');
    const inputElement = document.querySelector('#task-input');
    const listElement = document.querySelector('#tasks');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = inputElement.value;

        if(!task){
            alert('please enter your task');
            return;
        }

        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const contentElement = document.createElement('div');
        contentElement.classList.add('content');
        const inputTask = document.createElement('input');
        inputTask.classList.add('text');
        inputTask.setAttribute('readonly', 'readonly');
        inputTask.value = task;
        inputTask.type = 'text';

        contentElement.appendChild(inputTask);

        const taskActions = document.createElement('div');
        taskActions.classList.add('actions');

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.innerText = 'Edit';

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = 'Delete';

        taskActions.appendChild(editBtn);
        taskActions.appendChild(deleteBtn);
        
        contentElement.appendChild(taskActions);
        taskElement.appendChild(contentElement);

        listElement.appendChild(taskElement);

        inputElement.value = '';

        editBtn.addEventListener('click', () => {
            if(editBtn.innerText.toLowerCase() === 'edit'){
                inputTask.removeAttribute('readonly');
                inputTask.focus();
                editBtn.innerText = 'Save';
            }else{
                inputTask.setAttribute('readonly', 'readonly');
                editBtn.innerText = 'Edit';
            }
        });

        deleteBtn.addEventListener('click', () => {
            listElement.removeChild(taskElement);
        })

    });
});