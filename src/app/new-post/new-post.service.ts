import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NewPostService {

  constructor(private Http: Http) { }

  post(post: any): Observable<any[]>{
    post.author = 'Jason Politis';
    post.date = Date.now().toString();
    post.comments = [];
    
    let bodyString = JSON.stringify(post); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.Http.post('http://localhost:3000/api/jpblog/create', bodyString, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: any) {
    return JSON.parse(res._body) || '';
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
