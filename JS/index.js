let tasks = 1;
let updation = false;
function add() {
    if (document.getElementById("todo").value == "") {
        alert("Please Write something in given field");
    }
    else if (!document.getElementById("checkbox").checked) {
        alert("Please select the checkbox");
    }
    else {

        let todo = document.getElementById('todo').value;
        let task = document.createElement("input");
        let delButton = document.createElement("input");
        let updateButton = document.createElement("input");

        let breakLine = document.createElement("BR");


        updateButton.setAttribute("type", "button");
        updateButton.setAttribute("value", "UPDATE");
        updateButton.setAttribute("id", tasks);
        updateButton.setAttribute("onclick", "updateTask(this.id)");

        delButton.setAttribute("type", "button");
        delButton.setAttribute("value", "DELETE");
        delButton.setAttribute("id", tasks);
        delButton.setAttribute("onclick", "deleteTask(this.id)");

        task.setAttribute("type", "text");
        task.setAttribute("value", todo);
        task.setAttribute("id", tasks);


        // document.getElementById("content").appendChild(breakLine);
        document.getElementById("content").appendChild(task);
        document.getElementById("content").appendChild(updateButton);
        document.getElementById("content").appendChild(delButton);
        document.getElementById("content").appendChild(breakLine);

        document.getElementById(tasks).disabled = true;
        tasks++;
    }


}