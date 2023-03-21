
import { ConfigurableFocusTrap } from '@angular/cdk/a11y';
import {Component, OnInit, ViewChild} from '@angular/core';
import { DataService } from '../service/data.service';
import { DatePipe } from '@angular/common';
import { Conge } from '../conge';
import { Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employes:any;
  types:any;
  conge = new Conge();
  route: any;
  datedebutcong:any;
  datefincong:any;
  momentVariable: any;
  stringvalue:any;
  momentVariablefin: any;
  stringvaluefin:any;
  Days:any;
  Time:any;
  nbrdays:any;
  constructor(private dataService:DataService,private router: Router,public datepipe: DatePipe) { }
  

  ngOnInit(): void {
    this.getempData();
    this.gettypeData();
  }
  gotoList(){
    this.router.navigate(['/listecong']);  // define your component where you want to go
}
  getempData()
  {
    this.dataService.getempldata().subscribe(res => {
      //console.log(res)
      this.employes = res ;
    
    });
  }
  gettypeData()
  {
    this.dataService.gettypedata().subscribe(res => {
      //console.log(res)
      this.types = res ;
    
    });
  }
  
  addconge()
  {
  // this.conge.datedebutcong = this.datepipe.transform(this.conge.datedebutcong, 'yyyy-MM-dd');
  // this.conge.datefincong = this.datepipe.transform(this.conge.datefincong, 'yyyy-MM-dd');
    console.log(this.datefincong);
    this.momentVariable = moment(this.datedebutcong, 'MM-DD-YYYY');  
    this.stringvalue = this.momentVariable.format('YYYY-MM-DD');   
    this.conge.datedebutcong=this.stringvalue;

    this.momentVariablefin = moment(this.datefincong, 'MM-DD-YYYY');  
    this.stringvaluefin = this.momentVariablefin.format('YYYY-MM-DD');   
    this.conge.datefincong=this.stringvaluefin;
    console.log(this.conge.datefincong);
    console.log(this.conge);
    this.nbrdays= moment.duration(this.momentVariablefin.diff(this.momentVariable)).asDays();
    this.conge.nbjourcong=this.nbrdays;
    console.log("nb of days:"+this.conge.nbjourcong);
    // this.conge.date=new
  this.dataService.insertdata(this.conge).subscribe(
    res=>{
      this.gotoList();
     // console.log("list conge",this.conge);
      //let parsedDate = moment(this.conge.datedebutcong,"YYYY-MM-DD");
     // console.log('test',parsedDate);
     // this.route.navigate(['/listecong']);
    }
  );
  }
}
 