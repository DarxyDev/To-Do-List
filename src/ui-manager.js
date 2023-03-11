import interlinkManager from './interlink-manager.js';
import svg_editIcon from './img/edit-icon.svg';

const uiManager = (() => {
    //static references
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
                    form: document.getElementById('NT-form'),
                    name: document.getElementById('NT-form-name'),
                    description: document.getElementById('NT-form-description'),
                    priority: document.getElementById("NT-form-priority"),
                    dueDate: document.getElementById('NT-form-due-date'),
                    color: document.getElementById('NT-form-color')
                },
            },
        },
        //dynamic references
        categories: [],
        items: [],
    }
    //variables / settings
    const usingCloneNode = true;
    let selectedCategoryIndex = 0;
    const colors = {
        getPriorityLevelColor: (priority) => {
            return `rgba(255,255,255,${(priority * .1 + .2)})`;
        }
    };


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
            categories.forEach(category => { addCategoriesDOM(category) });
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
        itemElement.style.backgroundColor = colors.getPriorityLevelColor(tasks.priority);
        ref.container.item.appendChild(itemElement);
        return itemElement;
    }
    const getSelectedCategoryIndex = () => { return selectedCategoryIndex; }


    //private functions
    const _dragStatic = (() => {
        const dragTarget = {
            target: undefined,
            set: (t) => { dragTarget.target = t; },
            get: () => { return dragTarget.target; }
        };

        const spacerElement = {
            element: _createSpacerElement(),
            get: function () { return this.element },
            set: function (e) { this.element = e },
            appendBefore: function (element) {
                let parent = element.parentNode;
                element.remove();
                parent.insertBefore(element, this.element);
                this.element.remove();
            },
            appendAfter: function (element) { //unused
                let parent = element.parendNode;
                element.remove();
                parent.appendChild(element);
                this.element.remove();
            },
        }
        return { dragTarget, spacerElement };
        function _createSpacerElement() {
            let element = document.createElement('category');
            element.classList.add('category-spacer');
            element.addEventListener('dragover', (e) => { e.preventDefault() })
            return element;
        }
    })()

    const _createCategory = (category) => {
        let categoryElement = document.createElement('category');
        categoryElement.classList.add('category-name');

        let nameElement = document.createElement('h4');
        nameElement.textContent = category.name;
        categoryElement.setAttribute('index', ref.categories.length);

        categoryElement.appendChild(_createEditBtn());
        categoryElement.appendChild(nameElement);
        categoryElement.appendChild(_createDeleteBtn());

        categoryElement.addEventListener('mousedown', (e) => {
            _selectCategory(+e.currentTarget.getAttribute('index'));
        });

        _setDragAndDrop(categoryElement);

        ref.categories.push(categoryElement);
        return categoryElement;

        function _setDragAndDrop(element) {
            // Possibly need dragenter with e.preventDefault().
            // Removed as it is working without it.
            // Needs further testing on other browsers.
            element.setAttribute('draggable', true);
            element.addEventListener('dragend', _onDragEnd);
            element.addEventListener('dragover', _onDragOver);
            element.addEventListener('dragstart', _onDragStart);
            function _onDragEnd(e) {
                e.currentTarget.classList.remove('hidden');
                _dragStatic.spacerElement.appendBefore(e.currentTarget);
            }
            function _onDragOver(e) {
                let target = e.target.closest('category');
                _dragStatic.dragTarget.set(target);
                e.preventDefault();
                if (!_isValidDrop(_dragStatic.dragTarget.get())) return;
                if (_mouseOnLeftSideOfElement(e, target))
                    target.parentNode.insertBefore(_dragStatic.spacerElement.element, target);
                else _insertAfter(_dragStatic.spacerElement.element, target);

                return;

                function _mouseOnLeftSideOfElement(event, target) {
                    let rect = target.getBoundingClientRect();
                    let leftBound = rect.left;
                    let width = rect.width;
                    let mousePos = event.clientX;
                    if ((mousePos - leftBound) < (width / 2)) return true;
                    return false;
                }
                function _insertAfter(newElement, refElement) {
                    if (!refElement.nextSibling) {
                        refElement.parentNode.appendChild(newElement);
                        return;
                    }
                    refElement = refElement.nextSibling;
                    refElement.parentNode.insertBefore(newElement, refElement);
                }
            }
        }
        function _onDragStart(e) {
            let fillerElement;
            if (usingCloneNode) {
                fillerElement = e.currentTarget.cloneNode(true);
                fillerElement.addEventListener('dragover', (e) => { e.preventDefault() })
            }
            else fillerElement = _dragStatic.spacerElement.get();
            _dragStatic.spacerElement.set(fillerElement);
            e.currentTarget.parentNode.insertBefore(fillerElement, e.currentTarget);
            e.currentTarget.classList.add('hidden');
        }
        function _isValidDrop(element) {
            if (element === undefined) return false;
            if (element === this) return false;
            if (element.nodeName !== "CATEGORY") return false;
            return true;
        }
        function _createEditBtn() {
            let btnElement = document.createElement('button');
            btnElement.appendChild(_createSVGElement(svg_editIcon));
            btnElement.classList.add('edit-category-btn', 'round-btn');

            btnElement.addEventListener('click', (e) => {
                const parent = e.currentTarget.parentNode;
                const titleElement = parent.querySelector('h4');
                let originalTitle = titleElement.textContent;
                titleElement.textContent = '';

                const inputElement = document.createElement('input');
                inputElement.value = originalTitle;
                inputElement.setAttribute('type', 'text');
                inputElement.classList.add('category-name-input');
                inputElement.addEventListener('keypress', (e) => {
                    if (e.key !== 'Enter') return;
                    _setInput();
                });
                inputElement.addEventListener('focusout', _setInput);
                titleElement.appendChild(inputElement);
                inputElement.select();

                return;

                function _setInput() {
                    const newName = inputElement.value;
                    titleElement.textContent = newName;
                    inputElement.remove();

                    let index = parent.getAttribute('index');
                    let thisCategory = interlinkManager.getCategoryArray()[index];
                    thisCategory.name = newName;
                }
            })

            return btnElement;
        }
        function _createDeleteBtn() {
            let btn = document.createElement('button');
            btn.classList.add('delete-category-btn', 'round-btn');
            btn.textContent = 'X';
            btn.addEventListener('click', _onClickDeleteCat);

            return btn;
            function _onClickDeleteCat(e) {
                let catElement = e.currentTarget.parentNode;
                let catIndex = +catElement.getAttribute('index');
                _removeCategory(catIndex);
                interlinkManager.removeCategory(catIndex);
                catElement.remove();
                if (catIndex < ref.categories.length)
                    _selectCategory(catIndex)
                else _selectCategory(catIndex - 1);

                function _removeCategory(index) {
                    let catArray = ref.categories;
                    catArray.splice(index, 1);
                    _updateCategoryIndexes();

                    function _updateCategoryIndexes() {
                        for (let i = 0; i < ref.categories.length; i++) {
                            ref.categories[i].setAttribute('index', i);
                        }
                    }
                }

            }
        }

    }

    const _createSVGElement = (svg) => {
        const imgElement = new Image();
        imgElement.src = svg;
        imgElement.classList.add('default-svg');
        return imgElement;
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

        function _makeDeleteTaskBtn() {
            let btn = document.createElement('button');
            btn.innerText = 'X';
            btn.classList.add('delete-task-btn', 'round-btn');
            btn.addEventListener('click', (e) => {
                let category = interlinkManager.getCategoryArray()[selectedCategoryIndex];
                category.removeTask(task.index);
                itemElement.addEventListener('transitionend', (e) => {
                    if (e.propertyName === 'margin-right')
                        itemElement.remove();
                });
                let itemWidth = itemElement.offsetWidth;
                itemElement.style.marginRight = `calc(${itemWidth * -1}px - var(--item-container-gap))`;
                itemElement.style.opacity = 0;

            })

            return btn;
        }
    }
    const _selectCategory = (categoryIndex) => {
        if ((selectedCategoryIndex >= 0) && (selectedCategoryIndex < ref.categories.length))
            ref.categories[selectedCategoryIndex].classList.remove('selected-category');
        if ((categoryIndex < 0) || (categoryIndex >= ref.categories.length)) {
            _clearItems();
            selectedCategoryIndex = -1;
            return;
        }
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
        if (selectedCategoryIndex < 0 || selectedCategoryIndex > ref.categories.length) return;
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
        if (bool) {
            ref.menu.newTask.container.classList.remove('hidden');
            ref.menu.newTask.form.name.focus();
        }
        else ref.menu.newTask.container.classList.add('hidden');
    }
    const _submitNewTask = () => {
        let formElements = ref.menu.newTask.form;
        let name = formElements.name.value;
        let description = formElements.description.value;

        let priority = formElements.priority.value;
        let dueDate = formElements.dueDate.value;
        let color = formElements.color.value;

        let category = interlinkManager.getCategoryArray()[selectedCategoryIndex];
        let task = category.newTask(name, description);
        task.priority = priority;
        task.dueDate = dueDate;
        task.color = color;
        addTasksDOM(task);

        _showBlackout(false);
        _showAddTaskMenu(false);
        _resetTaskForm();
    }


    return { ref, addTasksDOM, addCategoriesDOM, getSelectedCategoryIndex, init };
})()
export default uiManager;