import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

const flyInOut = trigger('flyInOut', [
  state('in', style({transform: 'translateX(0)', opacity: 1})),
  transition('void => *', [
    style({transform: 'translateX(-100%)', opacity: 0}),
    animate('150ms ease-in')
  ]),
  transition('* => void', [
    animate('150ms ease-out', style({transform: 'translateX(100%)', opacity: 0}))
  ])
]);

export {
  flyInOut,
};
