import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/models/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  allcontact: MyContact[] = []
  searchKey:string=''

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.allContacts().subscribe((data: any) => {
      console.log(data);
      this.allcontact = data

    })
  }

  search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value    
  }


}


