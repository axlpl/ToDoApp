export default function ToDoListController(ToDoService) {
  'ngInject';

  this.removeItem = removeItem.bind(this);
  this.editItem = editItem.bind(this);
  this.doneItem = doneItem.bind(this);
  this.updateList = updateList.bind(this);

  function removeItem(value) {
    const newList = this.toDoList
                        .filter((e) => e.order != value);

    ToDoService.remove(newList);
    this.updateList(newList);
  }

  function editItem() {
    ToDoService.edit(this.toDoList);
  }

  function doneItem(value) {
    const newList = this.toDoList
                        .map((e) => {
                          if (e.order === value) {
                            e.complete = 'done';
                          }
                          return e;
                        });

    ToDoService.edit(newList);
    this.updateList(newList);
  }
  function updateList(list) {
    this.toDoList = list;
  }
}
