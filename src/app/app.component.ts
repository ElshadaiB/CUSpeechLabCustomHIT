import { Component } from '@angular/core';
import { AfService } from './providers/af.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'external-hit';
  constructor(public af: AfService) { }
  logout() {

  }
}
