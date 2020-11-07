import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicationFomrAdapter } from 'src/app/models/adapters/publication-fomr.adapter';
import { PublicationsService } from 'src/app/services/publications.service';

@Component({
  selector: 'app-new-publication',
  templateUrl: './new-publication.component.html',
  styleUrls: ['./new-publication.component.css']
})
export class NewPublicationComponent implements OnInit {

  private _publicationForm: FormGroup;

  constructor(private service: PublicationsService, private fb: FormBuilder, private adapter: PublicationFomrAdapter, private router: Router) {
   }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this._publicationForm = this.fb.group({
      author: [''],
      title: [''],
      imgUrl: [''],
      description: [''],
      tag: [''],
    })
  }

  public onSubmit() {
    this.service.addPublication(this.adapter.adapt(this._publicationForm.value));
    this.onClose();
  }
  
  public get publicationForm() : FormGroup {
    return this._publicationForm;
  }
  
  public onClose(){
    this.router.navigateByUrl('publications')
  }
}
