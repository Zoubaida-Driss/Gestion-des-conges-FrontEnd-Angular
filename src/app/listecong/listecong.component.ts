import {ChangeDetectorRef, Component, Inject, OnInit, ViewChild} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ConsultercongComponent } from '../consultercong/consultercong.component';
import { DeletecongComponent } from '../deletecong/deletecong.component';
import { DataService } from '../service/data.service';
//import the service
export interface DialogData {
  id:any; 
}
@Component({
  selector: 'app-listecong',
  templateUrl: './listecong.component.html',
  styleUrls: ['./listecong.component.scss']
})
export class ListecongComponent implements OnInit {
  employe_id:any; 
  conges:any;
  resultat: any;
  buttonValue: any;
  dialogRefdel: any;
  idcong: any;
  constructor(private dataService:DataService , private cdr:ChangeDetectorRef ,public dialog: MatDialog
    ){ }
    toggle(button: { id: any; }) {
      this.employe_id = button.id;
      this.idcong = button.id;
      // console.log(this.employe_id);
    }
    openDialog(): void {
      const dialogRef = this.dialog.open(ConsultercongComponent, {
        
        width: '100%',
        data: {id:this.employe_id}
      });
    
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        
        
      });
    
    }
    openDialogdel(): void {
     
      const dialogRefdel = this.dialog.open(DeletecongComponent, {
        
        width: '30%',
        data: {id:this.idcong}
      });
  
     
      dialogRefdel.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        
        
      });
    }
   
  // displayedColumns = ['position', 'name', 'weight', 'symbol'];
 // dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
  ngOnInit(): void {
    this.getcongData();
    this.cdr.detectChanges();
  }

  getcongData()
  {
    this.dataService.getcongdata().subscribe(res => {
      //console.log(res)
      this.conges = res ;
    
    });
  }
}
// export interface Element {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: Element[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];