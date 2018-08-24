export const ToDoService = function (DataStorageService) {
    'ngInject';

    const id = 'todo-local';

    this.get = () => JSON.parse(DataStorageService.get(id));

    this.add = (data) => {
        const dataArray = JSON.parse(DataStorageService.get(id)) || [];
        dataArray.push({ data, order: dataArray.length, complete: 'none' });
        DataStorageService.set(id, JSON.stringify(dataArray));
    };

    this.remove = (data) => {
        DataStorageService.set(id, JSON.stringify(data));
    };

    this.edit = (data) => {
        DataStorageService.set(id, JSON.stringify(data));
    }
};