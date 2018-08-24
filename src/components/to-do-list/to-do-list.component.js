import template from './to-do-list.component.html';
import controller from './to-do-list.controller';
import './to-do-list.component.scss';

export const ToDoListComponent = {
  bindings: {
    toDoList: '<'
  },
  template,
  controller
};
