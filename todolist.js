const input = document.getElementById("todoinput");
const button = document.getElementById("todobtn");
const output = document.getElementById("todoadd");

button.addEventListener("click", function () {
    const task = input.value;
    if (task === "") {
        alert("Please enter your task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    const deletebtn = document.createElement("deletebtn");
    deletebtn.textContent = "delete";

    deletebtn.classList.add("deletebtn");

    deletebtn.addEventListener("click",function(){
        li.remove();
    });

    const savebtn = document.createElement("savebtn");
    savebtn.textContent = "save";

    savebtn.classList.add("savebtn");

    savebtn.addEventListener("click",function(){
        savebtn.remove();
    });

    li.appendChild(savebtn);

    li.appendChild(deletebtn);

    output.appendChild(li);

    input.value = "";

});