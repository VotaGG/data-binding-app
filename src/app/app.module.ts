import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';


import { FormsModule } from '@angular/forms';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgForFormComponent } from './ng-for-form/ng-for-form.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';

@NgModule({
  declarations: [
    AppComponent,
    NgClassComponent,
    NgContainerComponent,
    NgContentComponent,
    NgForComponent,
    NgForFormComponent,
    NgIfComponent,
    NgStyleComponent,
    NgSwitchComponent,
    NgTemplateComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
