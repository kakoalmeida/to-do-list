// Getting the variables through the html id 

var input = document.getElementById('input');
var taskAdd = document.getElementById('addBtn');
var delAll = document.getElementById('delAllBtn');
var taskList = document.getElementById('ul');

// function to adds the task
taskAdd.addEventListener('click', () =>{
    let doIt = input.value; // get the input from the user
    if (doIt == ' ' || doIt.length < 1){
        alert("Digite uma atividade");
    } else {
        let getTask = localStorage.getItem('list'); // cretas the variable for the todo list
        if (getTask == null) { // If its empty, will create an array
            list = [];
        } else {
            list = JSON.parse(getTask);
        }
        list.push(doIt);
        localStorage.setItem('list', JSON.stringify(list)); // Save the list into localStorage as a String with JSON
        input.value = "";
        addTask();
    }
})


function addTask() { // Put the task into an unordered list
    let getTask = localStorage.getItem('list');
    if (getTask == null) {
        list = [];
    } else {
        list = JSON.parse(getTask);
    }
    let taskOrder = "";

    list.forEach((task, index) => { // Will automatically generates the list in the html
        taskOrder += `<li>
                        <p id="${index}">${task}</p>
                        <div class="btnTask">
                            <i onclick=removeTask(${index}) class="fas fa-trash"></i>
                        </div>
                     </li>`;
    });
    taskList.innerHTML = taskOrder;
}

// To remove a single task
function removeTask(index){
    let getTask = localStorage.getItem('list');
    list = JSON.parse(getTask);

    list.splice(index, 1); // Remove the task from array
    localStorage.setItem('list', JSON.stringify(list));
    addTask();
}

// that will clear your localStorage removing all the tasks
delAll.addEventListener('click', () =>{
    localStorage.clear();
    addTask();
})

onload = () => {
    addTask();
}