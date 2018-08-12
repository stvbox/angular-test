import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-param-cmp',
  templateUrl: './param-cmp.component.html',
  styleUrls: ['./param-cmp.component.css']
})
export class ParamCmpComponent implements OnInit {

  constructor(private _router: Router, public _activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  goToMain(): void {
    this._router.navigate(['/']);
  }

}
