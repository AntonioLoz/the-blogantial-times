import { Injectable } from '@angular/core';
import { Adapter } from './adapter.adapter';
import { Publication } from '../publication.model';

@Injectable({
    providedIn: 'root'
})

export class PublicationFomrAdapter implements Adapter<Publication> {

     adapt(item: any): Publication {
        return new Publication(item.author, item.title, item.imgUrl, new Date(), item.description, item.tag);
    }
}
