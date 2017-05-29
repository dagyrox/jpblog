import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class PostService {

  constructor(private Http: Http) { }

  deletePost(id: string) {
    console.log(id);
    this.Http.delete('http://localhost:3000/api/jpblog/' + id).subscribe((res: Response) => console.log(res));
  }

}
