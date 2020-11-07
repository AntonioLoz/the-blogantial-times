export class User {

    private _userName: string;
    private _password: string;

    constructor(userName: string, password: string) {
        this._userName = userName;
        this._password = password;
    }

    
    public get userName() : string {
        return this._userName;
    }

    
    public get password() : string {
        return this._password;
    }

    
    public set userName(v : string) {
        this._userName = v;
    }
}
