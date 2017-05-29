import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class PostService {

  constructor(private Http: Http) { }

  deletePost(id: string): Observable<any> {
    return this.Http.delete('http://localhost:3000/api/jpblog/' + id);
  }

}
