import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';
import { Places } from 'src/app/share/models/Places';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm!: FormGroup;


  constructor(private fb: FormBuilder, private placesesService: PlacesService, private router: Router){}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      place: ['', Validators.required],
      description: ['', Validators.required],
      imgUrl: ['', Validators.required]
    })
  }
  createPlace() {
    if(this.createForm.invalid) return;

    const fv = this.createForm.value;
    let userId = localStorage.getItem('userId') || undefined;
    const addPlace: Places ={
      place: fv.place,
      description: fv.description,
      imgUrl: fv.imgUrl,
      likes: 0,
      ownerId: userId 
    };


    this.placesesService.postPlace(addPlace).subscribe(() => {
      this.router.navigate(['/gallery'])
    })
  }
}
