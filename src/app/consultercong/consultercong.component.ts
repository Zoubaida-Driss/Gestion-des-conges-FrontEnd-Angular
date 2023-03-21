import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../listecong/listecong.component';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-consultercong',
  templateUrl: './consultercong.component.html',
  styleUrls: ['./consultercong.component.scss']
})
export class ConsultercongComponent implements OnInit {
  employe_id: any;
conge:any;
 
  
  constructor(public dialogRef: MatDialogRef<ConsultercongComponent>,  @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService:DataService ) { }
  onNoClick(): void {
    this.dialogRef.close();

  }

  ngOnInit(): void {

    console.log(this.data.id);
    this.employe_id = this.data.id;
    this.getcongspecData();
  }
  getcongspecData()
  {
    this.dataService.getcongspecdata(this.employe_id).subscribe(res => {
     console.log(res);
      this.conge = res ;
     
    });
  }
 
}
