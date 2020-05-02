import { Component, OnInit } from '@angular/core';
import { ICountry } from '../Models/Index';
import { CoronaService } from '../Services/Index';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  countries: ICountry[];
  filteredCountries: ICountry[];
  constructor(private _coronaService: CoronaService) { }
  ngOnInit() {
    document.body.classList.add('bg-img');
   
    
      this._coronaService.getCountries().subscribe(
        data => {
          this.countries = data;
          this.filteredCountries = this.countries;
        },
        err => console.error(err),
        () => console.log('getBooks completed')
    );
    
    
  }
  searchCountrybyName(countryName: string) {
    this.filteredCountries = this.countries;
    if (countryName == "0") {
      this.filteredCountries = this.countries;

    }
    else {
      this.filteredCountries = this.filteredCountries.filter(count1 => count1.country == countryName);
      console.log(this.filteredCountries)
      
    }
  }

  
  }

