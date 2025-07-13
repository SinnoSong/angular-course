import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('myapp', { alias: 'appSafeLink' });

  constructor() {
    console.log('SafeLinkDirective initialized');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = confirm('Are you sure you want to leave this page?');
    if (wantsToLeave) {
      const target = event.target as HTMLAnchorElement;
      const address = target.href;
      target.href = address + '?from=' + this.queryParam();

      return;
    }
    event.preventDefault();
  }
}
