import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../listecong/listecong.component';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-deletecong',
  templateUrl: './deletecong.component.html',
  styleUrls: ['./deletecong.component.scss']
})
export class DeletecongComponent implements OnInit {
  idcong: any;
  constructor(public dialogRefdel: MatDialogRef<DeletecongComponent>,  @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService:DataService) { }

  ngOnInit(): void {
    console.log("this id :" + this.data.id);
    this.idcong = this.data.id;
    this.deletepersonne();

  }
  deletepersonne()
  {
     let id=this.idcong;
    this.dataService.deletedatacong(id).subscribe(res=>{
     this.onNoClick();
     
    })
  }
  onNoClick(): void {
    this.dialogRefdel.close();
  }

}
