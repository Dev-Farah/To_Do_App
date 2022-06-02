var header = document.getElementById("header");
var form = document.getElementById("form");
var toDoList = document.getElementById("to-do-list");

function countToDo() {
    var counter = document.getElementById("counter");
    var tasks = toDoList.children.length;
    if (!tasks) {
        counter.textContent = "No Tasks";
    } else if (tasks === 1) {
        counter.textContent = tasks + " " + "Task";
    } else {
        counter.textContent = tasks + " " + "Tasks";
    }
}

function addToDo() {
    var input = document.getElementById("todo-input");

    if (input.value.length >= 5 && input.value.length <= 34) {

        // Create To do list
        var ul = document.createElement("ul");
        toDoList.appendChild(ul);
        ul.className = "todo";
        var li = document.createElement("li");
        var h4 = document.createElement("h4");
        var h4Text = document.createTextNode(input.value);
        h4.appendChild(h4Text);
        li.appendChild(h4);
        ul.appendChild(li);

        // Create and append edit button
        var div = document.createElement("div");
        ul.appendChild(div);
        var editBtn = document.createElement("button");
        editBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>';
        div.appendChild(editBtn);
        editBtn.setAttribute("onclick", "editToDo(this)");
        editBtn.className = "edit-btn";

        // Create and append delete button
        var delBtn = document.createElement("button");
        delBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        div.appendChild(delBtn);
        delBtn.setAttribute("onclick", "delToDo(this)");
        delBtn.className = "del-btn";

        // Check if alert exists
        if (header.children.length > 2) {
            header.lastElementChild.remove();
        }
    } else {
        // Display Alert
        for (var i = 0; i < header.children.length; i++) {
            if (header.children.length == 2) {
                var alert = document.createElement("p");
                var alertText = document.createTextNode("Invalid entry");
                alert.appendChild(alertText);
                alert.className = "alert";

                header.appendChild(alert);
            }
        }
    }
    // Empty the Input field
    input.value = "";
}

function deleteAll() {
    toDoList.innerHTML = "";
    countToDo();
}

function editToDo(element) {
    var toDo = element.parentNode.previousElementSibling.firstElementChild;

    var editedTodo = prompt("Edit To-do", toDo.innerHTML);
    if (!editedTodo) {
        editedTodo = prompt("Please enter something, otherwise it will be deleted!", toDo.innerHTML);
        if (!editedTodo) {
            alert("Your task is going to be deleted");
            element.parentNode.parentNode.remove();

            countToDo();
        } else {
            toDo.innerHTML = editedTodo;
        }
    } else {
        toDo.innerHTML = editedTodo;
    }
}

function delToDo(element) {
    element.parentNode.parentNode.remove();
    countToDo();
}