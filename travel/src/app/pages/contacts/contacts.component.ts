import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PagesService } from '../pages.service';
import { Contact } from 'src/app/share/models/Contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private pagesService: PagesService, private router: Router) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    })
  }
  postContact() {
    if (this.contactForm.invalid) return;

    const fv = this.contactForm.value;
    const contact: Contact = {
      email: fv.email,
      subject: fv.subject,
      message: fv.message
    };
    this.pagesService.getContact(contact).subscribe(() => {
      this.router.navigate([''])
    })
  }


}
