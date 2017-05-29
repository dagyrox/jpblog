import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContentService {
  getPostsSubscription: any;
  posts: Array<any>;
  timerSubscription: any;

  constructor(private Http: Http) { }

  getAllPosts(): Observable<any[]> {
    return this.Http.get('http://localhost:3000/api/jpblog/987')
      .map(this.extractData)
      .catch(this.handleError);
  }

  refreshData() {
    this.getPostsSubscription = this.getAllPosts().subscribe(
      (_posts) => {
        this.posts = _posts;      }
    )
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
