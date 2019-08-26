import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AproposComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AproposComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 

    }

  ngOnInit() {
  }

}
