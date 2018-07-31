import { PipeTransform, Pipe } from '@angular/core';
import { AllCountryComponent } from './allCountries/allCountries.component';


@Pipe({
    name: 'searchFilter'
})
export class CountryFilter implements PipeTransform {
    /*transform(allCountryDetails:any[], searchTerm: string):any {
        if (!allCountryDetails || !searchTerm) {
            return allCountryDetails;
        }
       
        return allCountryDetails.filter(countryName => countryName.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
     
    }*/
    transform(value: any, args?: any): any {
        if (!args) {
            return value;
        }
        else {
            args = args.toLowerCase();
        }
        return value.filter(items =>  {
           return items.name.toLowerCase().
           startsWith(args) == true})
    }

}