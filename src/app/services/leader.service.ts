import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {Leaders} from '../shared/leaders';



@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders():Leader[]{
    return Leaders;
  }
  getLeader(id: number): Leader {
    return Leaders.filter((leader) => (leader.id === id))[0];
  }
  
  getFeaturedLeader(): Leader {
    return Leaders.filter((leader) => leader.featured)[0];
  }

}
