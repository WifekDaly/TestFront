import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
const routes: Routes = [
 {path: '', redirectTo: 'accueil',  pathMatch: 'full'},
 {path: 'accueil', component: AccueilComponent},
 {path: 'login', component: LoginComponent},
 {path: 'inscription', component: InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
