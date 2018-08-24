import template from './to-do.component.html';
import controller from './to-do.controller';
import './to-do.component.scss';

export const ToDoComponent = {
    bindings: {
      onDataAdded: '&'
    },
    template,
    controller
};
