import angular from 'angular';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

export default angular.module('app.components', [])
.component('toDo', ToDoComponent)
.component('toDoList', ToDoListComponent)
.name;
