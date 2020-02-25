import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsComponent } from './modules/home/pages/persons/persons.component';
import { DashboardComponent } from './modules/home/pages/dashboard/dashboard.component';
import { PersonDataResolver } from './core/resolvers/person.resolver';
import { PersonsDataResolver } from './core/resolvers/persons.resolver';
import { PersonComponent } from './modules/home/pages/person/person.component';


const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "persons",
    component: PersonsComponent,
    resolve: {
      loaded: PersonsDataResolver,
    },
  },
  {
    path: "persons/:id",
    component: PersonComponent,
    resolve: {
      loaded: PersonDataResolver,
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
