import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsComponent } from './modules/home/persons/persons.component';
import { DashboardComponent } from './modules/home/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "persons",
    component: PersonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
