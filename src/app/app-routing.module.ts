import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from 'src/app/guards/auth.guard'
import {LoginComponent} from "./components/login/login.component";
import {TaskFormComponent} from "./components/task-form/task-form.component";
import {TasksDashboardComponent} from "./components/tasks-dashboard/tasks-dashboard.component";

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'tasks-form', component: TaskFormComponent,canActivate:[AuthGuard]},
  { path: 'tasks-form/:taskId', component: TaskFormComponent,canActivate:[AuthGuard]},
  { path: 'dashBoard', component: TasksDashboardComponent,canActivate:[AuthGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
