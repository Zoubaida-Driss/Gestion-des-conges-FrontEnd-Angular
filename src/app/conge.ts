import { formatDate } from "@angular/common";
import { Input } from "@angular/core";
import * as moment from 'moment';

export class Conge {
   //datdeb=formatDate(new Date(), 'yyyy/MM/dd','en');
    date = formatDate(new Date(), 'yyyy/MM/dd','en');
 datedemandecong=this.date ;
datedebutcong:any;
  datefincong:any;
  comentaire='';
  nbjourcong:any;
  etat_id:any; //non traité
  type_id:any;
  employe_id:any;
  response_id:any;
  //pas de reponse
}


