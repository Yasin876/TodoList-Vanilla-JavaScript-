const addForm = document.querySelector('.add');
const todoList = document.querySelector('.todos');
const search = document.querySelector('.search input')


//adding todo 
function getTodo(todo) {

    myhtml = ` <li class="list-group-item d-flex justify-content-between align-items-center">
               <span> ${todo} </span>
               <i class="far fa-trash-alt delete"></i>
               </li>`
    todoList.innerHTML += myhtml;

}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();//sag ve sol boslukları kırpmak icin trim()
    if (todo.length) {
        getTodo(todo);
        addForm.reset();
    }
});

//deleting todo 
todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) { //eger hedef elementin class listesinde 'delete' varsa
        alert('Do you want to delete this task?');
        e.target.parentElement.remove();
    }
});

//search todo 

const filterTodos = (term) => {
    //HTMLCollection'ı array'e cevirme 
    Array.from(todoList.children)
        .filter((todo) => {
            return !todo.textContent.includes(term)
        })
        .forEach((todo) => {
            return todo.classList.add('filtered');
        })
    //opposite 
    Array.from(todoList.children)
        .filter((todo) => {
            return todo.textContent.includes(term)
        })
        .forEach((todo) => {
            return todo.classList.remove('filtered');
        })

}

//note : HTMLCollection da foreach ve filter gibi kullanımlar bulunmaz bu yüzden liste Array'e cevrilmeli 
search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodos(term);
})