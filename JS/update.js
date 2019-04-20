function updateTask(id) {
    if (updation) {
        document.getElementById(id).disabled = true;
        updation = false;
    }
    else {
        document.getElementById(id).disabled = false;
        updation = true;
    }
    
}