import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-rct',
  templateUrl: './form-rct.component.html',
  styleUrls: ['./form-rct.component.css']
})
export class FormRctComponent implements OnInit {
  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      fio: new FormControl(),
      fakeGroup: new FormGroup({
        fst: new FormControl,
        sec: new FormControl()
      })
    });
  }

  ngOnInit() {
  }

}
