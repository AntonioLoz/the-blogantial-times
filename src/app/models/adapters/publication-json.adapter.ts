import { Injectable } from '@angular/core';
import { Adapter } from './adapter.adapter';
import { Publication } from '../publication.model';

@Injectable({
    providedIn: 'root'
})


export class PublicationJsonAdapter implements Adapter<Publication> {

   
    constructor() {

    }

    public adapt(item: any): Publication {
        let dateOut: Date;
        let dateText: string = item.publishedAt;

        const year = Number(dateText.substring(0, 4));
        const month = Number(dateText.substring(5, 7));
        const day = Number(dateText.substring(8, 10));

        dateOut = new Date(year, month, day);

        
        dateOut.setFullYear(year);
        dateOut.setMonth(month);
        dateOut.setDate(day);

        const publication = new Publication(item.author, item.title, item.urlToImage, dateOut, item.description, item.source.name);        

        return publication;
    }
}
