import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-inner1',
  templateUrl: './inner1.component.html',
  styleUrls: ['./inner1.component.css']
})
export class Inner1Component implements OnInit {

  constructor(private ds: DataStoreService) { }

  ngOnInit() {
    
  }

  onInput({target}): void {
    this.ds.setTempContent(target.value);
    console.log(target.value);
  }
}
