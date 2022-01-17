console.log("ToDo1");

let liTasks = document.querySelectorAll('li');
liTasks.forEach(li => {
    li.addEventListener("click", () => {
        // 1. Način
        // if(li.style.textDecoration == "line-through"){
        //     li.style.textDecoration = "none";
        // } else {
        //     li.style.textDecoration = "line-through";
        // }

        // 2. Način
        li.classList.toggle("lineThrough");
    });       
});