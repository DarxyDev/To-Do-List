import errorManager from './error-manager.js';
import './normalize.css';
import './style.css';
import taskManager from './task-manager.js';
import uiManager from './ui-manager';

const THIS_SCRIPT = 'index.js';

const mainManager = (() => {
    const getTaskArray = (categoryIndex) => {
        return taskManager.getTasks(categoryIndex);
    }
    const getCategoryArray = () => {
        return taskManager.getCategories();
    }
    return { getTaskArray, getCategoryArray };
})()

export default mainManager;



//initialization
(() => {

    //populate with data:
    for (let i = 0; i < 5; i++) {
        let cat = taskManager.newCategory(`cat_${i}`);
        for (let j = 0; j < 5; j++) {
            cat.newTask(`task_${j}`, `This is task number ${j} in category ${cat.name}`);
        }
    }
    //get starting categories
    let categories = taskManager.getCategories();
    if (categories.length === 0) {
        taskManager.newCategory('General');
        categories = taskManager.getCategories();
    }

    //clear any pre-populated items
    uiManager.ref.container.category.textContent = '';
    uiManager.ref.container.item.textContent = '';
    uiManager.ref.menu.newTask.form.form.reset();

    //populate with initial categories/tasks
    uiManager.addCategories(categories);
    uiManager.init();
})()

