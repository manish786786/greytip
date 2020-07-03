import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from '../common-service.service';
import { DataObj } from '../interface/formData.interface';

@Component({
  selector: 'app-create-speech',
  templateUrl: './create-speech.component.html',
  styleUrls: ['./create-speech.component.css']
})
export class CreateSpeechComponent implements OnInit {

  form: FormGroup;
  editdata: DataObj;
  index: number;
  edit: boolean = false;
  showMessage: boolean = false;
  message: string;

  constructor(private _fb: FormBuilder, private _commonService: CommonServiceService, ) { }

  ngOnInit(): void {
    this.initForm();

    this.editdata = this._commonService.getValue();
    //for local storage use
    this.index = this._commonService.getIndex();
    if (this.editdata) {
      this.edit = true
      this.patchForm();
    }
    this.onraddiochanges();
  }

  initForm() {
    this.form = this._fb.group({
      speech: ['', Validators.required],
      author: ['', Validators.required],
      keyword: ['', Validators.required],
      date: [''],
      radio:[]
    });
  }

onraddiochanges(){
  this.form.get('radio').valueChanges.subscribe(()=>{
    if(){

    }else{
      
    }
  })
}

  patchForm() {
    this.form.patchValue({
      speech: this.editdata ? this.editdata.speech : "",
      author: this.editdata ? this.editdata.author : "",
      keyword: this.editdata ? this.editdata.keyword : "",
      date: this.editdata ? this.editdata.date : "",
    })
  }

  save() {

    //localStorage
    //get data and push into one array
    let storeData: Array<any> = [];
    storeData = JSON.parse(localStorage.getItem('data')) == null ? [] : JSON.parse(localStorage.getItem('data'))
    storeData.push(this.form.value)

    //save data to localstorage
    let localStorageData = JSON.stringify(storeData)
    localStorage.setItem('data', localStorageData);

    this.message = 'the give data is saved successfully'
    this.showMessage = true

    //empty form
    this.form.reset();
  }

  update() {
    this.message = 'the give data is updated successfully'
    this.showMessage = true

    //get data and delete previous entry
    let storeData: Array<any> = [];
    storeData = JSON.parse(localStorage.getItem('data')) == null ? [] : JSON.parse(localStorage.getItem('data'))
    storeData.splice(this.index, 1)

    storeData.push(this.form.value)

    //save data to localstorage
    let localStorageData = JSON.stringify(storeData)
    localStorage.setItem('data', localStorageData);

    //empty form
    this.form.reset();
    this.edit = false;
  }

}
