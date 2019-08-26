import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-aide',
  templateUrl: './aide.component.html',
  styleUrls: ['./aide.component.css']
})
export class AideComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AideComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 

    }


  ngOnInit() {
  }
  chat(){
    this.dialogRef.close("vous êtes sur skype");
    
  }
}
