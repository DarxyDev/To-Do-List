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
        function _addNewCategory() {
            console.log('Add category button hit.');
        }
        ref.button.openNewTaskMenu.addEventListener('click', openAddTaskMenu);
        function openAddTaskMenu() {
            _showBlackout(true);
            _showAddTaskMenu(true);
        }
        ref.menu.newTask.button.submit.addEventListener('click', () => {
            let formElements = ref.menu.newTask.form;
            let name = formElements.name.value;
            let description = formElements.description.value;

            let category = interlinkManager.getCategoryArray()[selectedCategoryIndex];
            let task = category.newTask(name, description);
            addTasks(task);

            _showBlackout(false);
            _showAddTaskMenu(false);
            _resetTaskForm();
        })
    }

    //public functions
    const addCategories = (categories) => {
        if (Array.isArray(categories)) {
            categories.forEach(category => { addCategories(category) });
            return;
        }
        let categoryElement = _createCategory(categories);
        ref.container.category.appendChild(categoryElement);
    }
    const addTasks = (tasks) => {
        if (Array.isArray(tasks)) {
            tasks.forEach(task => { addTasks(task) });
            return;
        }
        let item = _createItem(tasks);
        ref.items.push(item);
        ref.container.item.appendChild(item);
    }
    const getSelectedCategoryIndex = () => { return selectedCategoryIndex; }


    //private functions
    const _createCategory = (category) => {
        let categoryElement = document.createElement('category');

        let nameElement = document.createElement('h4');
        nameElement.textContent = category.name;
        categoryElement.appendChild(nameElement);

        categoryElement.setAttribute('index', ref.categories.length);
        categoryElement.addEventListener('click', (e) => {
            _selectCategory(+e.currentTarget.getAttribute('index'));
        });

        ref.categories.push(categoryElement);

        return categoryElement;
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
        addTasks(interlinkManager.getTaskArray(categoryIndex));
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
        if (bool) ref.menu.newTask.container.classList.remove('hidden');
        else ref.menu.newTask.container.classList.add('hidden');
    }


    return { ref, addTasks, addCategories, getSelectedCategoryIndex, init };
})()
export default uiManager;