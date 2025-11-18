import { Component, signal } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-contacts',
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss'
})
export class Contacts {
  protected readonly title = signal('photo');
}
