import { Component, ViewChild } from '@angular/core';
import { IContact } from "./contact";
import{ ContactService} from "./contact.service"

@Component({
    selector: 'pm-contact',
    styleUrls: ['./contact-list.component.css'],
    templateUrl: './contact-list.component.html'

})

export class ContactListComponent{
    
    errorMessage: string;

    contacts: IContact[] = [];
    
    _searchString: string;

    get searchString(): string
    {
        return this._searchString;
    }

    set searchString(value: string)
    {
        this._searchString = value;
    }

    constructor(private _contactService: ContactService){

    }

    public getResults(): any{

        this._contactService.getContacts(this.searchString)
        .subscribe(
            data => this.contacts = data,
            error => this.errorMessage = error)
    
        }
}