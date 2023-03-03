import interlinkManager from './interlink-manager.js';

const uiManager = (() => {
    //references
    const ref = {
        container: {
            item: document.getElementById('item-container'),
            category: document.getElementById('category-container'),
            blackout: document.getElementById('blackout-container'),
        },
        button: {
            openNewTaskMenu: document.getElementById('open-new-task-menu-btn'),
            addCategory: document.getElementById('create-new-category-btn'),
        },
        menu: {
            newTask: {
                container: document.getElementById('add-task-popup'),
                button: {
                    submit: document.getElementById('create-task-btn'),
                },
                form: {
                    form: document.getElementById('new-task-form'),
                    name: document.getElementById('new-task-form-name'),
                    description: document.getElementById('new-task-form-description'),
                },
            },
        },
        //dynamic references
        categories: [],
        items: [],
    }
    //variables
    let selectedCategoryIndex = 0;

    //Initialize - Call in index.js
    const init = () => {
        _selectCategory(selectedCategoryIndex);

        //static element event listeners
        ref.button.addCategory.addEventListener('click', _addNewCategory);
        ref.button.openNewTaskMenu.addEventListener('click', _openAddTaskMenu);
        ref.menu.newTask.button.submit.addEventListener('click', _submitNewTask)
    }

    //public functions
    const addCategoriesDOM = (categories) => {
        //accepts html elements, single or array of category objects
        if (categories.nodeName !== undefined) {
            if (categories.nodeName !== 'CATEGORY')
                console.log(`warning --> addCategoriesDOM : Category<${categories} is not type CATEGORY>`);
            ref.container.category.appendChild(categories);
            ref.categories.push(categories);
            return categories;
        }
        if (Array.isArray(categories)) {
            categories.forEach(category => {addCategoriesDOM(category) });
            return;
        }
        let categoryElement = _createCategory(categories);
        ref.container.category.appendChild(categoryElement);
        return categoryElement;
    }
    const addTasksDOM = (tasks) => {
        //accepts html elements, single or array of task objects
        if (tasks.nodeName !== undefined) {
            if (tasks.nodeName !== 'ITEM')
                console.log(`warning --> addTasksDOM : Task<${tasks}> is not type ITEM.`);
            ref.items.push(tasks);
            ref.container.item.appendChild(tasks);
            return;
        }
        if (Array.isArray(tasks)) {
            tasks.forEach(task => { addTasksDOM(task) });
            return;
        }
        let itemElement = _createItem(tasks);
        ref.container.item.appendChild(itemElement);
        return itemElement;
    }
    const getSelectedCategoryIndex = () => { return selectedCategoryIndex; }


    //private functions
    const _createCategory = (category) => {
        let categoryElement = document.createElement('category');
        categoryElement.classList.add('category-name');

        let nameElement = document.createElement('h4');
        nameElement.textContent = category.name;
        categoryElement.setAttribute('index', ref.categories.length);

        _addEditBtnToCategory(categoryElement);
        categoryElement.appendChild(nameElement);

        categoryElement.addEventListener('click', (e) => {
            _selectCategory(+e.currentTarget.getAttribute('index'));
        });

        ref.categories.push(categoryElement);
        return categoryElement;
    }
    const _addEditBtnToCategory = (categoryElement) => {
        let btnElement = document.createElement('button');
        categoryElement.appendChild(btnElement);
        btnElement.classList.add('edit-category-btn', 'round-btn');

        btnElement.addEventListener('click', (e) => {
            const parent = e.currentTarget.parentElement;
            const titleElement = parent.querySelector('h4');
            let originalTitle = titleElement.textContent;
            titleElement.textContent = '';

            const inputElement = document.createElement('input');
            inputElement.value = originalTitle;
            inputElement.setAttribute('type', 'text');
            inputElement.classList.add('category-name-input');
            inputElement.addEventListener('keypress', (e) => {
                if (e.key !== 'Enter') return;
                const newName = inputElement.value;
                titleElement.textContent = newName;
                inputElement.remove();

                let index = parent.getAttribute('index');
                let thisCategory = interlinkManager.getCategoryArray()[index];
                thisCategory.name = newName;
            });
            titleElement.appendChild(inputElement);
            inputElement.select();
        })

        return btnElement;
    }
    const _createItem = (task) => {
        let itemElement = document.createElement('item');

        let titleElement = document.createElement('h3');
        titleElement.textContent = task.name;

        let descriptionElement = document.createElement('p');
        descriptionElement.textContent = task.description;

        let deleteBtn = _makeDeleteTaskBtn();

        itemElement.appendChild(titleElement);
        itemElement.appendChild(descriptionElement);
        itemElement.appendChild(deleteBtn);

        ref.items.push(itemElement);
        return itemElement;
        
        function _makeDeleteTaskBtn(){
            let btn = document.createElement('button');
            btn.innerText = 'X';
            btn.classList.add('delete-task-btn', 'round-btn');
            btn.addEventListener('click', (e)=>{
                let category = interlinkManager.getCategoryArray()[selectedCategoryIndex];
                category.removeTask(task.index);
                itemElement.remove();
            })

            return btn;
        }
    }
    const _selectCategory = (categoryIndex) => {
        ref.categories[selectedCategoryIndex].classList.remove('selected-category');
        ref.categories[categoryIndex].classList.add('selected-category');
        selectedCategoryIndex = categoryIndex;

        _clearItems();
        addTasksDOM(interlinkManager.getTaskArray(categoryIndex));
    }
    function _addNewCategory() {
        let index = ref.categories.length;
        let category = interlinkManager.newCategory('');

        let categoryElement = addCategoriesDOM(category);
        _selectCategory(index);
        categoryElement.querySelector('.edit-category-btn').click();
    }
    function _openAddTaskMenu() {
        _showBlackout(true);
        _showAddTaskMenu(true);
    }
    const _clearItems = () => {
        ref.items = [];
        ref.container.item.textContent = '';
    }
    function _resetTaskForm() {
        ref.menu.newTask.form.form.reset();
    }
    const _showBlackout = (bool) => {
        if (bool) ref.container.blackout.classList.remove('hidden');
        else ref.container.blackout.classList.add('hidden');
    }
    const _showAddTaskMenu = (bool) => {
        if (bool){ 
            ref.menu.newTask.container.classList.remove('hidden');
            ref.menu.newTask.form.name.focus();
    }
        else ref.menu.newTask.container.classList.add('hidden');
    }
    const _submitNewTask = () => { //submit.eventListener
        let formElements = ref.menu.newTask.form;
        let name = formElements.name.value;
        let description = formElements.description.value;

        let category = interlinkManager.getCategoryArray()[selectedCategoryIndex];
        let task = category.newTask(name, description);
        addTasksDOM(task);

        _showBlackout(false);
        _showAddTaskMenu(false);
        _resetTaskForm();
    }


    return { ref, addTasksDOM, addCategoriesDOM, getSelectedCategoryIndex, init };
})()
export default uiManager;