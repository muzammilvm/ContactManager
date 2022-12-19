import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import {AddContactComponent} from './add-contact/add-contact.component'
import { ViewContactComponent } from './view-contact/view-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/contacts/admin',pathMatch:'full'
  },
  {
    path:'contacts/admin' , component:ContactManagerComponent
  },
  {
    path:'contacts/add' , component:AddContactComponent
  },
  {
    path:'contacts/edit/:contactId' , component:UpdateContactComponent
  },
  {
    path:'contacts/view/:Id' , component:ViewContactComponent
  },
  {
    path:'**', component:PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
