// Selecciona los elementos del DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Funcion para agregar una tarea
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === ''){
        alert('Por favor, escribe una tarea.');
        return;
    }

    // Crear un nuevo elemento <li> para la tarea
    const li = document.createElement('li');
    li.textContent = taskText;

    // Crear botón de eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('deleteBtn');

    // Agregar evento de eliminación al botón
    deleteBtn.addEventListener('click', function(){
        let resp = confirm(`¿Deseas eliminar la tarea "${taskText}"?`);
        if(resp){
            taskList.removeChild(li);
        }
    });

    // Añadir el botón eliminar al <li>
    li.appendChild(deleteBtn);

    // Añadir el <li> a la lista
    taskList.appendChild(li);

    // Limpiar el campo de Texto
    taskInput.value = '';
}

// Agregar evento al botón de agregar tarea
addTaskBtn.addEventListener('click', addTask);