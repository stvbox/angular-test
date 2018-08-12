import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-second-cmp',
  templateUrl: './second-cmp.component.html',
  styleUrls: ['./second-cmp.component.css']
})
export class SecondCmpComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  public goToMain(): void {
    this._router.navigate(['/']);
  }

}
