import { Component, OnInit } from '@angular/core';
import { IState, IData, IIndia } from '../Models/Index';
import { CoronaService } from '../Services/Index';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { state } from '@angular/animations';
import { Key } from 'protractor';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent {
  States: IData[];
  IndiaData: IIndia[];
  constructor(private _coronaService: CoronaService) { }
  
  
  ngOnInit() {
    
    

    this._coronaService.getSpecificCountry().subscribe(
      data => {

        this.States = [];
        for (let key in data) {
          this.States.push(data[key]);
        }
        

        
      },
      err => console.error(err),
      () => console.log('getData completed')
    );
    this._coronaService.getIndia().subscribe(
      data => {

        this.IndiaData = Array.of(data);



      },
      err => console.error(err),
      () => console.log('getData completed')
    );


  }
 

}

