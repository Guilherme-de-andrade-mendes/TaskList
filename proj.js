let btn = document.querySelector('.btn-primary');
let listTask = document.querySelector('.list-group');
let inpTask = document.querySelector('.form-control');

let tasks = [];

const renderData = () => {
    listTask.textContent = "";
    tasks.forEach(element => {
        const stringText = document.createElement('li');
        stringText.setAttribute('class', 'list-group-item list-group-item-action');
        stringText.setAttribute('onclick', 'removeTask(this)');
        stringText.textContent = element;
        listTask.appendChild(stringText);
    });
}

const removeTask = (elemento) => {
    listTask.removeChild(elemento);
    tasks = tasks.filter(task => task !== elemento.textContent);
}

const removeSpans = () => {
    let spans = document.querySelectorAll('span');
    spans.forEach(span => {
        span.parentNode.removeChild(span);
    })
}

btn.onclick = () => {
    let taskValue = inpTask.value.trim();
    if (taskValue !== "") {
        tasks.push(taskValue);
        inpTask.value = '';
        removeSpans();
        renderData();
    } else {
        removeSpans();
        let card = document.querySelector('.card');
        const span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');
        span.setAttribute('role','alert');
        span.innerHTML = "Tarefa vazia...";
        card.appendChild(span);
    }
}
