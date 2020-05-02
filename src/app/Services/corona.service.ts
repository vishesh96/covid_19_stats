import { Injectable } from '@angular/core';
import { ICountry } from '../Models/Country';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CoronaService {

  constructor(private _http: Http) { }

  countries: any;
  getCountries() {
    let tempVar = this._http.get('http://coronavirus-19-api.herokuapp.com/countries/');
    return tempVar.pipe(map((response: any) => response.json()));
  }
  getSpecificCountry() {
    let tempVar = this._http.get('http://covid19-india-adhikansh.herokuapp.com/states');
    return tempVar.pipe(map((response: any) => response.json()));
    
  }
  getIndia() {
    let tempVar = this._http.get('http://coronavirus-19-api.herokuapp.com/countries/India');
    return tempVar.pipe(map((response: any) => response.json()));

  }
  


}
