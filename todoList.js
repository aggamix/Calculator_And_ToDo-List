const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');


todoForm.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault(); // отменяем стандартное поведение события, которое происходит (в нашем примере для формы по "submit", чтобы при отправке не было перегазрузки страницы)

    // Значение из инпута (новая задача в todo List)
    const taskText = todoInput.value;

    // 1 Создаем li с помощью createElement
    const newTask = document.createElement('li');
    newTask.innerHTML = taskText;

    // 1 Создаем кнопку УДАЛИТЬ
    const deleteBtn = document.createElement('button'); // создаем кнопку
    deleteBtn.setAttribute('role', 'button'); // устанавливаем кнопке атрибут role="button" (стоит добавлять, если кнопки носят вспомогательный характер)
    deleteBtn.innerText = "Удалить"; // добавляем текст в нашу кнопку
    deleteBtn.style['margin-left'] = '15px'; // делаем внешний отступ с лево, чтобы наша кнопка не прилегала к добавленной задаче
    newTask.append(deleteBtn); // добавляем кнопку к новой задаче
    deleteBtn.addEventListener('click', deleteTask); // вешаем событие на кнопку, чтобы при нажатии, у нас удалялась сама задача

    // 1 Добавляем элемент на страницу
    todoList.append(newTask);

    // 2 Создаем li с значением инпута
    //const li = `<li>${taskText}</li>`

    // 2 Добавляем наш li
    //todoList.insertAdjacentHTML('beforeend', li); // добавляем в конец

    // Очистка инпута
    todoInput.value = "";

    // Фокус на поле ввода
    todoInput.focus();
}

function deleteTask() {
    this.closest('li').remove(); // поднимаемся до ближайшего родительского тега li и удаляем его
}
