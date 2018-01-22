import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';
// import {DISHES} from '../shared/dishes';
import {Http, Response, HttpModule} from '@angular/http';

import {HttpClientModule} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import {baseURL} from '../shared/baseurl';
import {ProcessHttpmsgService} from './process-httpmsg.service';

import  'rxjs/add/operator/toPromise';
import  'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DishService {

  constructor(private http:Http,
  private processHttpmsgService: ProcessHttpmsgService) { }



  getDishes(): Observable<Dish[]> {
    console.log("this is before",this.http.get(baseURL+"dishes","this is after"))

    return this.http.get(baseURL+"dishes")
    .map(res=>{return this.processHttpmsgService.extractData(res)})
    .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get(baseURL+"dishes/"+id)
    .map(res=>{return this.processHttpmsgService.extractData(res)})
    .catch(error => { return this.processHttpmsgService.handleError(error); });

    // return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]).delay(2000);
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get(baseURL+"dishes?featured=true")
    .map(res=>{return this.processHttpmsgService.extractData(res)[0]})
    .catch(error => { return this.processHttpmsgService.handleError(error); });
    // return Observable.of(DISHES.filter((dish) => dish.featured)[0]).delay(2000);
  }
  getDishIds(): Observable<number[]> {
    return this.getDishes()
    .map(dishes=>{return dishes.map(dish=>dish.id)})
    .catch(error => { return this.processHttpmsgService.handleError(error); });
  }
}
