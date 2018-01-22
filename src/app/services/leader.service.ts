import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {Leaders} from '../shared/leaders';
import { Observable } from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import {ProcessHttpmsgService} from './process-httpmsg.service';
import {baseURL} from '../shared/baseurl';

import  'rxjs/add/operator/toPromise';
import  'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LeaderService {
  rest:Response;
  constructor(private http:Http,
  private processHttpmsgService: ProcessHttpmsgService
  ) { }

  getLeaders(): Observable<Leader[]>{
    
    console.log();
    return this.http.get(baseURL+"leaders").map(res=> {return this.processHttpmsgService.extractData(res)});

    
  }
  getLeader(id: number): Observable< Leader> {
    return this.http.get(baseURL+"leaders/"+id).map(res => {return this.processHttpmsgService.extractData(res)});
    
    

    
  }
  
  getFeaturedLeader(): Observable< Leader> {
    return this.http.get(baseURL+"leaders?featured=true").map(res => {return this.processHttpmsgService.extractData(res)[0]});


    
  }
  getLeaderIds(): Observable<number[]> {
    return this.getLeaders()
    .map(leaders=>{return leaders.map(leader=>leader.id)});
  }

}
