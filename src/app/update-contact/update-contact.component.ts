import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/models/myContact';
import { MyGroup } from 'src/models/myGroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent {
  contactId: string = ''
  contact: MyContact = {} as MyContact
  groupId: any
  groupName: any
  allGroups: MyGroup[] = [] as MyGroup[]

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      this.contactId = data.contactId
      console.log(data);
      console.log(this.contactId);

    })
    // function for get all contact
    this.api.getAllGroup().subscribe((data: any) => {
      console.log(data);
      this.allGroups = data

    })
    // api call 
    this.api.viewContact(this.contactId).subscribe((data: any) => {
      console.log(data);
      this.contact = data
      this.groupId = data.groupId
      console.log(this.groupId);
      // groupname api call
      this.api.getGroupName(this.groupId).subscribe((result: any) => {
        console.log(result);
        this.groupName = result.name
        console.log(this.groupName);

      })

    })


  }

  // function for updating contact
  updateContact() {
    this.api.updateContact(this.contactId, this.contact).subscribe(()=>{
      this.router.navigateByUrl('')
    })
  }
}
