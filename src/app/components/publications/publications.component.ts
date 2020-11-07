import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Publication } from 'src/app/models/publication.model';
import { PublicationsService } from 'src/app/services/publications.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  @ViewChild('opaque') opaque: ElementRef;

  private publications$: Observable<Array<Publication>>;
  private _publications: Array<Publication>;

  constructor(private service: PublicationsService, private router: Router) {
    this._publications = new Array<Publication>();
   }


  ngOnInit(): void {
    this.publications$ = this.service.getPublications$();
    this.publications$.subscribe( (publications: Array<Publication>) => {
      for(let publication of publications){
        if(publication.descrption !== null) {
          this._publications.push(publication);
        } 
      }
    }, error => {console.log(error);});
    

    this.service.setPublications(this._publications);

  }
  
  public switchPublicationFlag() {
    this.router.navigateByUrl('publications/new')    
  }

  public get publications() : Array<Publication> {
    return this._publications;
  }
}
