import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgClassComponent } from './ng-class/ng-class.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgForFormComponent } from './ng-for-form/ng-for-form.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';


const routes: Routes = [
  {path:'',redirectTo:'NgClassComponent',pathMatch:'full'},
  {path:'ng-class',component:NgClassComponent},
  {path:'ng-container',component:NgContainerComponent},
  {path:'ng-content',component:NgContentComponent},
  {path:'ng-for',component:NgForComponent},
  {path:'ng-for-form',component:NgForFormComponent},
  {path:'ng-if',component:NgIfComponent},
  {path:'ng-style',component:NgStyleComponent},
  {path:'ng-switch',component:NgSwitchComponent},
  {path:'ng-template',component:NgTemplateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
