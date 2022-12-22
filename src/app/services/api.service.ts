import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/models/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string ='http://localhost:3000/contacts'
  groupurl:string=""

  constructor(private http: HttpClient) { }


  // function for calling all contact details
  allContacts():Observable<MyContact> {
   return this.http.get(this.baseUrl)
  }


  // function for calling particular person's details
  viewContact(contactId:string){
    console.log(contactId);
   return this.http.get(`${this.baseUrl}/${contactId}`)
  }


  // function for calling person's groupId
  getGroupName(groupId:string){
    console.log(groupId);
    
    return this.http.get('http://localhost:3000/groups/'+groupId)
  }

  // fuction for fetching groups
  getAllGroup(){
   return this.http.get('http://localhost:3000/groups')
  }

  // function for adding new contact
  addContact(contactBody:any){
   return this.http.post(this.baseUrl,contactBody)
  }

  // function for deleting a contact
  deleteContact(contactId:any){
   return this.http.delete(`${this.baseUrl}/${contactId}`)
  }

  // function for updating contatc
  updateContact(contactId:any,contactBody:any){
    return this.http.put(`${this.baseUrl}/${contactId}`,contactBody)
  }

}
