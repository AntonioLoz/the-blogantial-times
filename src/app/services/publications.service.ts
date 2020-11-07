import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Publication } from '../models/publication.model';
import { PublicationJsonAdapter } from '../models/adapters/publication-json.adapter';

/**
 * 
 * En está practica tambien aprovecho para poner en practica el uso de los observables y la
 * adaptacion de los datos de la api a los diferentes modelos implementados.
 * 
 */

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  // creamos el Subject encargado de generar y emitir los eventos
  // de actualizacion del dataSource
  private publications$ = new Subject<Array<Publication>>();
  private publications: Array<Publication>;
  private baseUrl: string;
  private key: string;

  constructor(private dataSource: HttpClient, private adapter: PublicationJsonAdapter) { 
    this.publications = new Array<Publication>();
    this.baseUrl = "https://newsapi.org/v2";
    this.key = '';     
  }

  // creamos el metodo encargado de añadir el nuevo elemento al array
  // y de emitir el evento con el metodo nex() pasandole el array ya modificado.
  // en este metodo le pasamos la publicacion que queremos añadir
  addPublication(publication: Publication): void {
    
    this.publications.push(publication);              
    this.publications$.next(this.publications);
  }

  // Este metodo será el encargado de entregar a todos los componentes que lo requieran(observers)
  // el observable. Este será un consumidor de eventos del Subject y solo será de lectura
  // Mediante el obserbable, los observers sabrán cuando el dataSource se ha modificado
  getPublications$(): Observable<Array<Publication>> {
    let url: string = `${this.baseUrl}/top-headlines`
    
    url += `?apiKey=${this.key}&language=es&country=us&language=es`    

    return this.dataSource.get(url).pipe(
      map( (data: any) => data.articles.map( (item: any) => this.adapter.adapt(item)))
    );
  }

  setPublications(publications: Array<Publication>) {
    this.publications = publications;
  }
}
