import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GlobeService} from '../globe.service';
//Back To My Previous location
import { Location } from '@angular/common';
@Component({
    templateUrl:'country-view.component.html',
    styleUrls:['country-view.component.css']
})
export class CountryViewComponent implements OnInit{
    public countryView:any[];
    constructor(private _globeService:GlobeService,private _activatedRoute:ActivatedRoute,private location:Location){

    }
    ngOnInit(){
        let countryCode:string=this._activatedRoute.snapshot.params['countryCode'];
      
       this.countryView=this._globeService.getSpecificCountryDetails(countryCode)
                .subscribe(data =>this.countryView =data          
        );
        
    }
    goBack(){
        this.location.back();

    }
}