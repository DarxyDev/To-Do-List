import mainManager from './index.js'

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
        categories: [],
        items: [],
        main: document.getElementById('main'),
        menu:{
            newTask: {
                container: document.getElementById('add-task-popup'),
                button:{
                    submit: document.getElementById('create-task-btn'),
                },
                form: {
                    form: document.getElementById('new-task-form'),
                    name: document.getElementById('new-task-form-name'),
                    description: document.getElementById('new-task-form-description'),
                },
            },
        }
    }
    //variables
    let selectedCategoryIndex = 0;
    //functions

    const addCategories = (categories) => {
        if (!Array.isArray(categories)) {
            let categoryElement = _createCategory(categories);
            ref.container.category.appendChild(categoryElement);
            return;
        }
        categories.forEach(category => { addCategories(category) });

    }
    const _createCategory = (category) => {
        let categoryElement = document.createElement('category');

        let name = document.createElement('h4');
        name.textContent = category.name;
        categoryElement.appendChild(name);

        categoryElement.setAttribute('index', ref.categories.length);
        categoryElement.addEventListener('click', (e) => {
            _selectCategory(+e.currentTarget.getAttribute('index'));
        });

        ref.categories.push(categoryElement);

        return categoryElement;
    }

    const addTasks = (tasks) => {
        if (!Array.isArray(tasks)) {
            let item = _createItem(tasks);
            ref.items.push(item);
            ref.container.item.appendChild(item);
            return;
        }
        tasks.forEach(task => { addTasks(task) });
    }
    const _createItem = (task) => {
        let item = document.createElement('item');

        let title = document.createElement('h3');
        title.textContent = task.name;

        let description = document.createElement('p');
        description.textContent = task.description;

        item.appendChild(title);
        item.appendChild(description);

        return item;

    }
    const _selectCategory = (categoryIndex) => {
        ref.categories[selectedCategoryIndex].classList.remove('selected-category');
        ref.categories[categoryIndex].classList.add('selected-category');
        selectedCategoryIndex = categoryIndex;

        _clearItems();
        addTasks(mainManager.getTaskArray(categoryIndex));
    }
    const _clearItems = () => {
        ref.items = [];
        ref.container.item.textContent = '';
    }
    const _clearCategories = () => {
        ref.categories = [];
        ref.container.category.textContent = [];
    }
    const getSelectedCategoryIndex = () => {
        return selectedCategoryIndex;
    }
    const init = () => {
        _selectCategory(selectedCategoryIndex);
        
        //event listeners
        ref.button.addCategory.addEventListener('click', _addNewCategory);
        function _addNewCategory() {
            console.log('Add category button hit.');
        }
        ref.button.openNewTaskMenu.addEventListener('click', openAddTaskMenu);
        function openAddTaskMenu() {
            _showBlackout(true);
            _showAddTaskMenu(true);
        }
        function closeAddTaskMenu(){
            _showBlackout(false);
            _showAddTaskMenu(false);
        }
        const _showBlackout = (displayBlackout) => {
            if (displayBlackout) ref.container.blackout.classList.remove('hidden');
            else ref.container.blackout.classList.add('hidden');
        }
        const _showAddTaskMenu = (displayAddTaskMenu) =>{
            if(_showAddTaskMenu) ref.menu.newTask.container.classList.remove('hidden');
            else ref.menu.newTask.container.classList.add('hidden');
        }
        ref.menu.newTask.button.submit.addEventListener('click', _createTask);
        function _createTask(){
            let formElements = ref.menu.newTask.form;
            let name = formElements.name.value;
            let description = formElements.description.value;

            let category = mainManager.getCategoryArray()[selectedCategoryIndex];
            let task = category.newTask(name, description);
            addTasks(task);
            
            closeAddTaskMenu();
            _clearNewTaskForm();
        }
        function _clearNewTaskForm(){
            ref.menu.newTask.form.form.reset();
        }
    }
    return { ref, addTasks, addCategories, getSelectedCategoryIndex, init };
})()
export default uiManager;