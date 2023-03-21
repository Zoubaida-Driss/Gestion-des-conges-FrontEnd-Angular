import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../listecong/listecong.component';
import { DataService } from '../service/data.service';
import { TraicongComponent } from '../traicong/traicong.component';

@Component({
  selector: 'app-traicongspecif',
  templateUrl: './traicongspecif.component.html',
  styleUrls: ['./traicongspecif.component.scss']
})
export class TraicongspecifComponent implements OnInit {
  reponses: any;
reponse_id:any;
rep_id:any;
id:any;
  constructor(public dialogRef: MatDialogRef<TraicongComponent>,  @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService:DataService) { }
  onNoClick(): void {
    this.dialogRef.close();
    
  }
  ngOnInit(): void {
    this.getrepData();
    console.log(this.data.id);
    this.id = this.data.id;
    
  }
  getrepData()
  {
    this.dataService.getreponsedata().subscribe(res => {
      // console.log(res);
      this.reponses = res ;
    
    });
  }
  getidbutton(value:any){
 console.log( this.reponse_id=value);
  }

  updatereponse()
  {
     let ida=this.id;
     let idb=this.reponse_id;
     console.log(ida)//1
     console.log(idb)//2
    this.dataService.updatereponse(ida,idb).subscribe(res=>{
    console.log(res);
     
    })
  }
  
}


