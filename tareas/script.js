class Task {
  constructor(name, description, dueDate) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = false;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
  }

  getTasks() {
    return this.tasks;
  }
}

// Crear instancia del administrador de tareas
const taskManager = new TaskManager();

// Lógica de interacción con el DOM
//trae todos los elementos del html desde el formulario
const taskForm = document.getElementById("task-form");
const taskNameInput = document.getElementById("task-name");
const taskDescInput = document.getElementById("task-description");
const taskDueDateInput = document.getElementById("task-due-date");
const taskList = document.getElementById("task-list");

//evento que se activa cada vez que da al bton type submit Agregar tarea
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //almacena los valores escritos dentro de los inputs del formulario
  const name = taskNameInput.value;
  const description = taskDescInput.value;
  const dueDate = taskDueDateInput.value;
  //crea un nuevo objeto de la clase Task con los valores obtenidos de los inputs
  const task = new Task(name, description, dueDate);
  //de la  clase TaskManager que crea una lista cada vez que la llamo,
  //agrego entonces esa tarea a la lista con el metodo interno  addTask,
  //y paso como argumento la tarea previamente creada
  taskManager.addTask(task);
  renderTasks(); //llamo la funcion que muestra la tarea creada en el html
  taskForm.reset(); //reinicio el formulario
});

function renderTasks() {
  taskList.innerHTML = ""; //vacia el elemento ul que va guardar las tareas
  //guarda en la variable tasks la lista de tareas que tenga
  const tasks = taskManager.getTasks();
  //recorre todos los elementos(objetos) de la lista tareas guardada en tasks
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i]; //entra a cada objeto
    //crea un li en cada recorrido del for, la cantidad de objetos q tenga
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTaskCompleted(${i})">
      <span>${task.name}</span>
      <button onclick="removeTask(${i})">Eliminar</button>
    `;
    taskList.appendChild(listItem);
  }
}

function toggleTaskCompleted(index) {
  const task = taskManager.getTasks()[index];
  task.toggleCompleted();
  renderTasks();
}

function removeTask(index) {
  taskManager.removeTask(index);
  renderTasks();
}

renderTasks();
