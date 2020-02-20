import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/home/pages/dashboard/dashboard.component';
import { MenuComponent } from './core/menu/menu.component';
import { PersonsComponent } from './modules/home/pages/persons/persons.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './modules/home/pages/person/person.component';
import { LabelsComponent } from './modules/home/components/labels/labels.component';
import { PersonProfileComponent } from './modules/home/components/person-profile/person-profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/person.reducer';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    PersonsComponent,
    PersonComponent,
    LabelsComponent,
    PersonProfileComponent,
  ],
  imports: [
    StoreModule.forRoot({ person: reducer }),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
