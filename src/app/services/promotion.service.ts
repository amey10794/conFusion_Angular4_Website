import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import {Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';

import {baseURL} from '../shared/baseurl';
import {ProcessHttpmsgService} from './process-httpmsg.service';

import  'rxjs/add/operator/toPromise';
import  'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class PromotionService {

  constructor(private http:Http,
  private processHttpmsgService:ProcessHttpmsgService
  ) { }

  getPromotions(): Observable< Promotion[]> {
    
    return this.http.get(baseURL+"promotions").map(res=>{return this.processHttpmsgService.extractData(res)});
    
  }

  getPromotion(id: number): Observable< Promotion > {
    return this.http.get(baseURL+"promotions"+id).map(res=>{return this.processHttpmsgService.extractData(res)});
    
  }

  getFeaturedPromotion(): Observable< Promotion> {
    return this.http.get(baseURL+"promotions?featured=true").map(res=>{return this.processHttpmsgService.extractData(res)[0]});
    
  }
  getPromotionIds(): Observable<number[]> {
    return this.getPromotions()
    .map(promotions=>{return promotions.map(promotion=>promotion.id)});
  }
}