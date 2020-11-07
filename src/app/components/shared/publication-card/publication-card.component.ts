import { Component, Input, OnInit } from '@angular/core';
import { Publication } from 'src/app/models/publication.model';

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.css']
})
export class PublicationCardComponent implements OnInit {

  @Input() publication: Publication;

  constructor() {
  }

  ngOnInit(): void {
  }
  
  
}
