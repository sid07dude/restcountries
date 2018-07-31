import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GlobeService {

    public mySpecificCountry;
    public baseUrl: string = "https://restcountries.eu/rest/v2";

    constructor(private _http:HttpClient) {}
    //Get the API based on region
     getCountryViewByRegion(regionName):any{
        return this._http.get(this.baseUrl+'/region/'+regionName);
    }
    //Get specific country API
    getSpecificCountryDetails(countryCode): any {
        return this._http.get(this.baseUrl+'/alpha/'+countryCode);

    }
    //get the list of API of the countries with the same currencies
    getAllCountriesWithSameCurrency(currencyNane):any {
        return this._http.get(this.baseUrl+'/currency/'+currencyNane);
    }
    //get the list of API of the countries with the same languages
    getAllCountriesWithSameLanguage(languageName):any {
        return this._http.get(this.baseUrl+'/lang/'+languageName);
    }
    errorHandler(error:HttpErrorResponse){
        return Observable.throw(error.message ||"Server Error");
      }
 
}