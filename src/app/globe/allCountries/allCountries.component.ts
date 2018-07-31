import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobeService } from '../globe.service';
import { Observable } from 'rxjs';

//my previous Location
import { Router } from '@angular/router';

@Component({
    selector: 'app-allCountries',
    templateUrl: 'allCountries.component.html',
    styleUrls: ['allCountries.component.css']
})
export class AllCountryComponent implements OnInit, OnDestroy {
    statusMessage:string;
    
    public allCountryDetails: any[];
    public allCountriesWithSameCurrencies: any[];
    public allCountriesWithSameLanguage: any[];

    constructor(private _globeService: GlobeService, private _activatedRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {

        let regionName:string = this._activatedRoute.snapshot.params['regionName'];
        if (regionName) {
            this._globeService.getCountryViewByRegion(regionName).subscribe(data => this.allCountryDetails = data,
                (e)=>{this.statusMessage="Problem with the server .Please try again after sometime."}
           );
        }

        let currencyName: string = this._activatedRoute.snapshot.params['currencyCode'];
        if (currencyName) {
            this._globeService.getAllCountriesWithSameCurrency(currencyName.toLowerCase()).subscribe(data => this.allCountryDetails = data);

        }
        
        let languageName: string = this._activatedRoute.snapshot.params['languageCode'];
        if (languageName) {
            this._globeService.getAllCountriesWithSameLanguage(languageName).subscribe(data => this.allCountryDetails = data);
        }
    }
    goBack() {
        this.router.navigate(['/home']);
    }
    ngOnDestroy() {
       
    }

}