import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  contactId: string = ''
  contact: any
  groupId: any
  groupName: any

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      this.contactId = data.Id
      console.log(data);
      console.log(this.contactId);

    })
    // api cal 
    this.api.viewContact(this.contactId).subscribe((data: any) => {
      console.log(data);
      this.contact = data
      this.groupId = data.groupId
      console.log(this.groupId);
      // groupname api call
    this.api.getGroupName(this.groupId).subscribe((result: any) => {
      console.log(result);
      this.groupName = result.name
    })

    })

    
  }

}
