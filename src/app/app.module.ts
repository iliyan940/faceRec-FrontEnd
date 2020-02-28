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
import { EffectsModule } from '@ngrx/effects';
import { PersonsEffects } from './store/effects/persons.effects';
import { ModalComponent } from './shared/components/modal/modal.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import * as fromApp from './store/reducers/index';
 
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    PersonsComponent,
    PersonComponent,
    LabelsComponent,
    PersonProfileComponent,
    ModalComponent,
    SpinnerComponent,
  ],
  imports: [
    StoreModule.forRoot(fromApp.reducers),
    EffectsModule.forRoot([PersonsEffects]),
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
