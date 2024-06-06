let btn = document.querySelector('.btn-primary');
let li = document.querySelectorAll('.list-group-item list-group-item-action');
let divTask = document.querySelector('.list-group');
let inpTask = document.querySelector('.form-control');

let tasks = [];

const renderData = () =>{
    divTask.textContent = "";
    for(t of tasks){
        const linha = document.createElement('li');
        linha.setAttribute('class', 'list-group-item list-group-item-action');
        linha.setAttribute('onclick', 'removeTask(this)');

        const alerta = document.createElement('li');
        alerta.setAttribute('class','alert alert-warning');
        alerta.setAttribute('role','alert');
        alerta.innerHTML = 'Tarefa vazia...';
        (t !== '' ? (linha.textContent = t) : (linha.appendChild(alerta)));
        divTask.appendChild(linha);
    }
}

const removeTask = (elemento => divTask.removeChild(elemento));

btn.onclick = () => {
    tasks.push(inpTask.value);
    inpTask.value = '';
    renderData();
}