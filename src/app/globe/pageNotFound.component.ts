import {Component} from '@angular/core';

@Component({
    template:'<h1>{{pageHeader}}</h1>'
})
export class PageNotFoundComponent{
    pageHeader:string='The Page You are looking for is not found';
}