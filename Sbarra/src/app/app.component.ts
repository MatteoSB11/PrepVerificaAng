import { Component } from '@angular/core';
import { AppSecondComponentComponent } from './app-second-component/app-second-component.component';
import { AppThirdComponentComponent } from './app-third-component/app-third-component.component';


@Component({
  selector: 'app-root',
  imports: [AppSecondComponentComponent, AppThirdComponentComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sbarra';
}
