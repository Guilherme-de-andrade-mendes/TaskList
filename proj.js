let btn = document.querySelector('.btn-primary');
let li = document.querySelectorAll('.list-group-item list-group-item-action');
let divTask = document.querySelector('.list-group');
let inpTask = document.querySelector('.form-control');

btn.onclick = () => {
    const linha = document.createElement('li');
    linha.setAttribute('class', 'list-group-item list-group-item-action');
    linha.setAttribute('onclick', 'removeTask(this)');

    const alerta = document.createElement('div');
    alerta.setAttribute('class','alert alert-warning');
    alerta.setAttribute('role','alert');
    alerta.innerHTML = 'Tarefa vazia...';

    (inpTask.value !== '' ? (linha.textContent = inpTask.value) : (linha.appendChild(alerta)));
    ;

    divTask.appendChild(linha);
    inpTask.value = '';
}

const removeTask = (elemento => divTask.removeChild(elemento));