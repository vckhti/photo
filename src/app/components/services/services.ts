import { Component, signal } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  protected readonly title = signal('photo');
}
