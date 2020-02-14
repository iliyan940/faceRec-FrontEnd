import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsComponent } from './modules/home/persons/persons.component';
import { DashboardComponent } from './modules/home/dashboard/dashboard.component';
import { PersonDataResolver } from './core/resolvers/person.resolver';
import { PersonsDataResolver } from './core/resolvers/persons.resolver';
import { PersonComponent } from './modules/home/person/person.component';


const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "persons",
    component: PersonsComponent,
    resolve: {
      persons: PersonsDataResolver,
    },
  },
  {
    path: "persons/:id",
    component: PersonComponent,
    resolve: {
      person: PersonDataResolver,
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
