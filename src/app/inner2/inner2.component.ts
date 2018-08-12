import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-inner2',
  templateUrl: './inner2.component.html',
  styleUrls: ['./inner2.component.css']
})
export class Inner2Component implements OnInit {
  content: string;

  constructor(private ds: DataStoreService) { }

  ngOnInit() {
    this.content = this.ds.getTempContent();
  }

}
