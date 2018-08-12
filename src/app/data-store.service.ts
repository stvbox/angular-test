import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService implements OnInit {
  _mainContent: string = null;
  _tempContent: string = null;

  ngOnInit(): void {
    console.log('DataStoreService::ngOnInit');
  }

  setTempContent(value: string): void {
    this._tempContent = value;
  }

  getTempContent(): string {
    return this._tempContent;
  }

  constructor() { }
}
