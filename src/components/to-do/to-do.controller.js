export default function ToDoController(ToDoService) {
  'ngInject';

  this.todo = '';
  this.save = save.bind(this);
  this.clearModel = clearModel.bind(this);

  function save(valid) {
    if (valid) {
      ToDoService.add(this.todo);
      this.clearModel();
      this.onDataAdded();
    }
  }

  function clearModel() {
    this.todo = '';
  }
}
