import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProduitsComponent } from './produits/produits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatTableModule, MatDialogModule,} from '@angular/material';
import { AideComponent } from './aide/aide.component';
import { AproposComponent } from './apropos/apropos.component';
import {ApiService} from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionComponent } from './inscription/inscription.component';
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HomeComponent,
    LoginComponent,
    ProduitsComponent,
    AideComponent,
    AproposComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule, 
    MatDialogModule,
    HttpClientModule
  ],
  entryComponents: [
   AideComponent,
   AproposComponent
  ],
  providers: [ ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
