import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  private destoryRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log('Current status:', this.currentStatus());
    });
  }

  ngOnInit() {
    const interval = setInterval(() => {
      const randomNum = Math.random();
      if (randomNum < 0.5) {
        this.currentStatus.set('online');
      } else if (randomNum < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
    this.destoryRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }
}
