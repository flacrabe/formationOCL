import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { EquipeComponent } from './equipe/equipe.component';
import { CentreFormationComponent } from './centre-formation/centre-formation.component';
import { FormationsComponent } from './formations/formations.component';
import { GarageComponent } from './garage/garage.component';

const appRoutes: Routes = [
    {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'equipe',
    component: EquipeComponent
  },
  {
    path: 'centre_de_formation',
    component: CentreFormationComponent
  },
  {
    path: 'formations',
    component: FormationsComponent
  },
  {
    path: 'formations_enfant',
    component: GarageComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    EquipeComponent,
    CentreFormationComponent,
    FormationsComponent,
    GarageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
