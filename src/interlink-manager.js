import taskManager from './task-manager.js';

const interlinkManager = (() => {
    const getTaskArray = (categoryIndex) => {
        return taskManager.getTasks(categoryIndex);
    }
    const getCategoryArray = () => {
        return taskManager.getCategories();
    }
    return { getTaskArray, getCategoryArray };
})()

export default interlinkManager;