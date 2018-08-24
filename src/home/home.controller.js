export default function HomeController(ToDoService) {
  'ngInject';

  this.dataAdded = dataAdded.bind(this);

  function dataAdded() {
    this.toDoList = ToDoService.get();
  }
}
