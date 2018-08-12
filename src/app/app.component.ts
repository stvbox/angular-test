import { Component, ViewEncapsulation } from '@angular/core';

import 'node_modules/bootstrap/dist/css/bootstrap.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'routes-stud';
}
