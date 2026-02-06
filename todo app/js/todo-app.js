
window.addEventListener('load', () => {
 
const inputElement = document.querySelector('#task-input');
const form = document.querySelector('#task-input-form');
const listElement = document.querySelector('#tasks');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = inputElement.value;

    if(!task){
        alert('please fill the task');
        return;
    }

    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    const contentElement = document.createElement('div');
    contentElement.classList.add('content');


    taskElement.appendChild(contentElement);

    const inputTask = document.createElement('input');
    inputTask.setAttribute('readonly', 'readonly');
    inputTask.classList.add('text');
    inputTask.type = 'text';
    inputTask.value = task;

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

    listElement.appendChild(taskElement);

    inputElement.value = '';

    editBtn.addEventListener('click', () => {
        if(editBtn.innerText.toLowerCase() === 'edit'){
            inputTask.removeAttribute('readonly');
            editBtn.innerText = 'Save';
            inputTask.focus();
        }else{
             inputTask.setAttribute('readonly', 'readonly');
             editBtn.innerText = 'Edit'
        }
    });

    deleteBtn.addEventListener('click', () => {
        listElement.removeChild(taskElement);
    })
});
   
});