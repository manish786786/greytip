import { Injectable } from '@angular/core';
import { DataObj } from './interface/formData.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  formData: DataObj;
  index: number;
  
  constructor() { }

  setValue(form: DataObj, index: number) {
    this.formData = form
    this.index = index
  }

  getValue() {
    return this.formData
  }

  getIndex() {
    return this.index
  }

}
