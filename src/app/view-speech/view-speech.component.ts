import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-speech',
  templateUrl: './view-speech.component.html',
  styleUrls: ['./view-speech.component.css']
})
export class ViewSpeechComponent implements OnInit {

  data: any;
  message: string;

  constructor(private _commonService: CommonServiceService,private _router: Router,) { }

  ngOnInit(): void {
    this.getData();
  }


  getData() {
    // get data from local storage
    this.data = JSON.parse(localStorage.getItem('data'))
  }


  delete(index) {

    //delete Data from localStorage
    // delete current data
    this.data.splice(index, 1);
    //save data to localstorage
    let localStorageData = JSON.stringify(this.data)
    localStorage.setItem('data', localStorageData);

    this.message = "deleted successfully"

  }

  edit(currentData, index) {
    this._commonService.setValue(currentData, index);
    this._router.navigate(['create']);
  }

}
