import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from '../comp1/comp1.component';
import { LandingPageComponent } from './compte-client/landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    // on peut retrouver dans les imports : 
    // librairies complètes d'angular (module ex : routerModule)
    // features (fonctionnalités)
  
    RouterOutlet,
    FormsModule,

    // on peut aussi importer les composants
    Comp1Component,
    LandingPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TP03';
}
