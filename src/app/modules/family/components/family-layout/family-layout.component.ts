import { Component, OnInit} from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-family-layout',
  templateUrl: './family-layout.component.html',
  styleUrls: ['./family-layout.component.scss'],
})
export class FamilyLayoutComponent implements OnInit {

  constructor(
  ) {
    console.log('FamilyLayoutComponent');
  }

  ngOnInit() {
  }


}
