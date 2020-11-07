import { Injectable } from '@angular/core';
import { User } from '../user.model';
import { Adapter } from './adapter.adapter';

@Injectable({
    providedIn: 'root'
})

export class UserFormAdapter implements Adapter<User>{

    constructor() {

    }

    public adapt(item: any): User {
        return new User(item.userName, item.password);
    }
}
