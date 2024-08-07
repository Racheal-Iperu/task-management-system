import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TasksDashboardComponent } from './components/tasks-dashboard/tasks-dashboard.component';
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";
import { TitleCasePipe } from './pipes/title-case.pipe';
import { RoleUpgradeComponent } from './components/role-upgrade/role-upgrade.component';
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskFormComponent,
    TasksDashboardComponent,
    TitleCasePipe,
    RoleUpgradeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatCardModule,
        ReactiveFormsModule,
        RouterModule,
        MatSelectModule,
        MatGridListModule,
        MatExpansionModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
