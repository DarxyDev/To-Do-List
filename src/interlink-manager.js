import taskManager from './task-manager.js';

const interlinkManager = (() => {
    const getTaskArray = (categoryIndex) => {
        return taskManager.getTasks(categoryIndex);
    }
    const getCategoryArray = () => {
        return taskManager.getCategories();
    }
    const newCategory = (name) => {
        return taskManager.newCategory();
    }
    return { getTaskArray, getCategoryArray, newCategory };
})()

export default interlinkManager;