import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    constructor(private http: Http) {}

    registrar(usuario: any) {

        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        const user = JSON.stringify(usuario);

        return this.http.post("http://localhost:7678/api/account/register", 
                        user, 
                        options)
                        .toPromise()
                        .then(res => console.log(res));

    }
}