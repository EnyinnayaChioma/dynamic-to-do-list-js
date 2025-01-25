document.addEventListener('DOMContentLoaded' ,  ()=> {
  // select add task button
   const addButton = document.getElementById('add-task-btn')
  //  select input
   const taskInput = document.getElementById('task-input')
  //  select the unordered list
   const tasklist = document.getElementById('task-list')

  //  create the addTask function

  const addTask = ()=> {
    // retrive and trim value from the input field
   let taskText = taskInput.value.trim();

  //  if taskText is empty, alert()
   if (taskText === '') {
    alert("Enter a task")
    // return;
   } 
    // if taskText is not empty, create a new list element
     const listItem = document.createElement('li');
    //  Set its textContent to taskText
     listItem.textContent = taskText;

    //  Create a new button element for removing the task
     const removeBtn = document.createElement('button');
    //  Set its textContent to "Remove"
     removeBtn.textContent = 'Remove';
    //  give it a class name of 'remove-btn'
    removeBtn.classList.add('remove-btn');
     
    //  Assign an onclick event to the remove button that, when triggered, removes the li element from taskList
    removeBtn.addEventListener('click' , ()=>{
      tasklist.removeChild(listItem);
    }) 
    
    // Append the remove button to the li element
    listItem.appendChild(removeBtn)

    // append the li to taskList
    tasklist.appendChild(listItem)
  
    taskInput.value = ''

  }


  //  Add an event listener to addButton that calls addTask when the button is clicked.
   addButton.addEventListener('click' , addTask)


  //  Add an event listener to taskInput for the 'keypress' event to allow tasks to be added by pressing the “Enter” key. Inside this event listener, check if event.key is equal to 'Enter' before calling addTask
   taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addTask(); // Call addTask when Enter key is pressed
    }
  });


})


