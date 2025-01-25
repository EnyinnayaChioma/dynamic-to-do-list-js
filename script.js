// document.addEventListener('DOMContentLoaded' ,  ()=> {
  
//   localStorage.getItem('tasks')
//   // select add task button
//    const addButton = document.getElementById('add-task-btn')
//   //  select input
//    const taskInput = document.getElementById('task-input')
//   //  select the unordered list
//    const tasklist = document.getElementById('task-list')

//   //  create the addTask function

//   const addTask = ()=> {
//     // retrive and trim value from the input field
//    let taskText = taskInput.value.trim();

//   //  if taskText is empty, alert()
//    if (taskText === '') {
//     alert("Enter a task")
//     // return;
//    } 
//     // if taskText is not empty, create a new list element
//      const listItem = document.createElement('li');
//     //  Set its textContent to taskText
//      listItem.textContent = taskText;

//     //  Create a new button element for removing the task
//      const removeBtn = document.createElement('button');
//     //  Set its textContent to "Remove"
//      removeBtn.textContent = 'Remove';
//     //  give it a class name of 'remove-btn'
//     removeBtn.classList.add('remove-btn');
     
//     //  Assign an onclick event to the remove button that, when triggered, removes the li element from taskList
//     removeBtn.addEventListener('click' , ()=>{
//       tasklist.removeChild(listItem);
//     }) 
    
//     // Append the remove button to the li element
//     listItem.appendChild(removeBtn)

//     // append the li to taskList
//     tasklist.appendChild(listItem)
  
//     taskInput.value = ''

//   }


//   //  Add an event listener to addButton that calls addTask when the button is clicked.
//    addButton.addEventListener('click' , addTask)


//   //  Add an event listener to taskInput for the 'keypress' event to allow tasks to be added by pressing the “Enter” key. Inside this event listener, check if event.key is equal to 'Enter' before calling addTask
//    taskInput.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//       addTask(); // Call addTask when Enter key is pressed
//     }
//   });


// })


document.addEventListener('DOMContentLoaded', () => {
  // Select DOM Elements
  const addButton = document.getElementById('add-button');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Initialize tasks array from localStorage
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Load tasks from localStorage into the DOM
  function loadTasks() {
    taskList.innerHTML = '';  // Clear any existing tasks
    tasks.forEach((taskText, index) => {
      createTaskElement(taskText, index);
    });
  }

  // Create a task element and add it to the DOM
  function createTaskElement(taskText, index) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');

    // Add event listener to remove task
    removeButton.addEventListener('click', () => {
      removeTask(index);  // Remove task from the tasks array and localStorage
    });

    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);
  }

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    tasks.push(taskText);  // Add task to tasks array
    localStorage.setItem('tasks', JSON.stringify(tasks));  // Save updated tasks to localStorage

    createTaskElement(taskText, tasks.length - 1);  // Create and add task to DOM
    taskInput.value = '';  // Clear the input field
  }

  // Function to remove a task
  function removeTask(index) {
    tasks.splice(index, 1);  // Remove the task from the tasks array
    localStorage.setItem('tasks', JSON.stringify(tasks));  // Save updated tasks to localStorage
    loadTasks();  // Reload tasks to reflect the removal
  }

  // Attach event listeners
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Load tasks from localStorage when the page loads
  loadTasks();
});
