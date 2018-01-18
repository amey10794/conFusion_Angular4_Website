import {Routes} from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';

export  const routes:Routes=[
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'menu',component:MenuComponent},
{path:'about',component:AboutComponent},
{path:'contactus',component:ContactComponent},
{ path: 'dishdetail/:id',     component: DishdetailComponent },


];