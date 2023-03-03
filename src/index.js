import './normalize.css';
import './style.css';
import taskManager from './task-manager.js';
import uiManager from './ui-manager';

//initialization
(() => {

    //populate with data:
    for (let i = 0; i < 2; i++) {
        let cat = taskManager.newCategory(`cat_${i}`);
        for (let j = 0; j < 5; j++) {
            let task = cat.newTask(`task_${j}`, `This is task number ${j} in category ${cat.name}`);
            task.priority = j;
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
    uiManager.addCategoriesDOM(categories);
    uiManager.init();
})()

