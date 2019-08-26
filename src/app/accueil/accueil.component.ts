import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material';
import { AideComponent } from '../aide/aide.component';
import { AproposComponent} from '../apropos/apropos.component'
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(public dialog: MatDialog) {
    setTimeout(
      () => {
        this.openPopupInformations();
      }, 4000
    );
   }

  ngOnInit() {
  }
  openPopupAide(): void {
    let dialogRef = this.dialog.open(AideComponent,{
      width: '500px',
      
    });
    dialogRef.afterClosed().subscribe(result =>{
      console.log('la fenêtre secondaire est fermée');
      console.log(result);
    });
  }
  openPopupInformations(): void{
    let dialogRef = this.dialog.open(AproposComponent,{
      width: '500px',
      
    });
    dialogRef.afterClosed().subscribe(result =>{
      console.log('la fenêtre secondaire est fermée');
      
    });
  }
}
