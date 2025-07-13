import {
  Component,
  contentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  label = input.required<string>();
  elementRef = inject(ElementRef);
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  onClick() {
    console.log('Control clicked');
    console.log(this.elementRef);
    console.log(this.control());
  }
}
