import {Component} from '@angular/core'
import { ContactService } from "./contact/contact.service";

@Component({
  selector: 'app-root',
  template: '<pm-contact></pm-contact>',
  styleUrls: ['./contact/contact-list.component.css'],
  providers: [ContactService]
})

export class AppComponent{
  title: string = 'Queried Corporate contact data:';
}