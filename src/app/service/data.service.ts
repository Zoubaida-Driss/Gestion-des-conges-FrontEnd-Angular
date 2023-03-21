import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conge } from '../conge';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private httpClient:HttpClient) { }
  public url ='http://127.0.0.1:8000/api/';

  getcongdata()
  {
    return this.httpClient.get('http://127.0.0.1:8000/api/conges') 
  } 
  getcongpasrepdata()
  {
    return this.httpClient.get('http://127.0.0.1:8000/api/congespasrep') 
  } 
  getcongparempdata(id:BigInteger)
  {
    return this.httpClient.get('http://127.0.0.1:8000/api/congesparemp/'+id) 
  } 
  getcongspecdata(id:BigInteger)
  {
    return this.httpClient.get('http://127.0.0.1:8000/api/conge/'+id) 
  } 
  getempldata()
  { 
    return this.httpClient.get('http://127.0.0.1:8000/api/employes') 
  }
  gettypedata()
  {
    return this.httpClient.get('http://127.0.0.1:8000/api/types') 
  } 
  insertdata(data: Conge)
  {
    return this.httpClient.post('http://127.0.0.1:8000/api/addconge',data) 

  }   
  deletedatacong(id:any)
  {
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteconge/'+id) 

  }
  //getreponsedata
  getreponsedata()
  {
    return this.httpClient.get('http://127.0.0.1:8000/api/reponses') 
  }
  updatereponse(idcon:any,idrep:any)
  {
    return this.httpClient.get('http://127.0.0.1:8000/api/updatereponse/'+idcon + '/' + idrep) 

  }
}
