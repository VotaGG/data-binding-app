import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';

const routes: Routes = [
  {path:'',redirectTo:'event-binding',pathMatch:'full'},
  {path:'event-binding',component:EventBindingComponent},
  {path:'property-binding',component:PropertyBindingComponent},
  {path:'string-interpolation',component:StringInterpolationComponent},
  {path:'two-way-data-binding',component:TwoWayDataBindingComponent},
  {path:'',component:EventBindingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
