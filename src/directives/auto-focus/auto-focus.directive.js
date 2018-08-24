export default function autoFocusDirective() {
  'ngInject';

  return function (scope, element, attrs) {
    scope.$watch(attrs.autoFocus, (newVal) => {
      if (newVal) {
        element[0].focus();
      }
    });
  }
}
