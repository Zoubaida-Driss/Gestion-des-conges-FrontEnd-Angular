import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { DataService } from '../service/data.service';
import { TraicongspecifComponent } from '../traicongspecif/traicongspecif.component';

@Component({
  selector: 'app-traicong',
  templateUrl: './traicong.component.html',
  styleUrls: ['./traicong.component.scss']
})
export class TraicongComponent implements OnInit {
  conges:any;
  employe_id: any;
  idcong: any;
  constructor(private dataService:DataService , private cdr:ChangeDetectorRef ,public dialog: MatDialog)  { }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngOnInit(): void {
    this.cdr.detectChanges();
    this.getcongparrepData();
  }
  toggle(button: { id: any; }) {
    // this.employe_id = button.id;
    // this.idcong = button.id;
    // console.log("id cong :"+this.idcong)
    // console.log(this.employe_id);
    
  }
  changeData(id:any) {
    this.idcong = id;
    
}
  openDialog(): void {
    
    const dialogRef = this.dialog.open(TraicongspecifComponent, {
      
      width: '20%',
      data: {id:this.idcong}
    });
  

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
      
    });
  
  }
  getcongparrepData()
  {
    this.dataService.getcongpasrepdata().subscribe(res => {
      // console.log(res)
      this.conges = res ;
    
    });
  }
}

