import {
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  // intervalValue = signal(0);
  // doubleIntervalValue = computed(() => this.intervalValue() * 2);
  private destroy = inject(DestroyRef);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$);
  constructor() {
    effect(() => {
      console.log('Click count:', this.clickCount());
    });
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.intervalValue.update((val) => val + 1);
    // }, 1000);
    // const subscription = interval(1000)
    //   .pipe(map((val) => val * 2))
    //   .subscribe({
    //     next: (val) => console.log('Interval value:', val),
    //   });
    // this.destroy.onDestroy(() => {
    //   console.log('Destroying component...');
    //   subscription.unsubscribe();
    // });
    const subscription = this.clickCount$.subscribe({
      next: (val) => console.log('Click count observable:' + this.clickCount()),
    });
    this.destroy.onDestroy(() => {
      console.log('Destroying component...');
      subscription.unsubscribe();
    });
  }

  onClick() {
    this.clickCount.update((count) => count + 1);
  }
}
