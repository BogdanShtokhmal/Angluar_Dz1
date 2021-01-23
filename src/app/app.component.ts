import { Component } from '@angular/core';
import { cars } from 'src/data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars = cars;
}
