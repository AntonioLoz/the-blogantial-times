export class Publication {

    private _author: string;
    private _title: string;
    private _imageUrl: string;
    private _published: Date;
    private _descrption: string;
    private _category: string;

    constructor(author: string, title: string, imageUrl: string, published: Date, descrption: string, category: string) {
        this._author = author;
        this._title = title;
        this._imageUrl = imageUrl;
        this._published = published;
        this._category = category;
        this._descrption = descrption;
    }
    
    public get author() : string {
        return this._author;
    }

    public get title() : string {
        return this._title;
    }

    public get imageUrl() : string {
        return this._imageUrl;
    }

    public get published() : Date {
        return this._published;
    }

    public get descrption() : string {
        return this._descrption;
    }

    
    public get category() : string {
        return this._category;
    }
    
    public set imageUrl(imageUrl : string) {
        this._imageUrl = imageUrl;
    }
    
    public set published(published : Date) {
        this._published = published;
    }

    public set descrption(descrption : string) {
        this._descrption = descrption;
    }

    public set category(category : string) {
        this._category = category;
    }
}
