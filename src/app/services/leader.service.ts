import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {Leaders} from '../shared/leaders';
import { Observable } from 'rxjs/Observable';

import  'rxjs/add/operator/toPromise';
import  'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';


@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]>{
    return Observable.of(Leaders).delay(2000);

    
  }
  getLeader(id: number): Observable< Leader> {
    return Observable.of(Leaders.filter((leader) => (leader.id === id))[0]).delay(2000);
    

    
  }
  
  getFeaturedLeader(): Observable< Leader> {
    return Observable.of(Leaders.filter((leader) => leader.featured)[0]).delay(2000);


    
  }

}
