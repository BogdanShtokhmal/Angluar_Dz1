import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CarComponent } from './components/car/car.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    HomeComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'link/home' , component: HomeComponent},
      {path: 'link/cars' , component: CarsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
