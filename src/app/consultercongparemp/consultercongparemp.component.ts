import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-consultercongparemp',
  templateUrl: './consultercongparemp.component.html',
  styleUrls: ['./consultercongparemp.component.scss']
})
export class ConsultercongparempComponent implements OnInit {
  employes: any;
  employe_id: any;
  Id :any;
  liste:any;
  constructor(private dataService:DataService,private router: Router,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getempData();
    this.getcongparempData();

  }
  getempData()
  {
    this.dataService.getempldata().subscribe(res => {
     // console.log(res);
      this.employes = res ;
    
    });
  }
  getidbutton(value:any){
    console.log(this.employe_id=value);
     }
  //    setNewUser(id: any)
  //     {
  //     console.log(id);
     
  // }
  onChange(sel: NgModel) {
    let id = sel.viewModel;
    this.employe_id=id;
    this.getcongparempData();
    // console.log(id);
   }
   //
   getcongparempData()
  {
     let id=this.employe_id;
    this.dataService.getcongparempdata(id).subscribe(res=>{
   this.liste = res;
     console.log(this.liste);
    })
  }
}
