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
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    EquipeComponent,
    CentreFormationComponent,
    FormationsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
