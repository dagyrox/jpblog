import { Component, OnInit } from '@angular/core';

import { NewPostService } from './new-post.service';

@Component({
  selector: 'jp-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  post: any;

  constructor(
    private NewPostService: NewPostService
  ) { }

  ngOnInit() {
    this.clear();
  }

  submit() {
    this.NewPostService.post(this.post).subscribe(
      (_res)=>{
        console.log(_res);
      },
      err=>console.log('Error: ' + JSON.stringify(err))
    );
  }

  clear() {
    this.post = { title: '', content: '' };
  }
}
