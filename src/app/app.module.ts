import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/home/dashboard/dashboard.component';
import { MenuComponent } from './core/menu/menu.component';
import { PersonsComponent } from './modules/home/persons/persons.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './modules/home/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    PersonsComponent,
    PersonComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
