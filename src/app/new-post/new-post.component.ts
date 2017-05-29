import { Component, OnInit } from '@angular/core';

import { NewPostService } from './new-post.service';
import { ContentService } from '../content/content.service';

@Component({
  selector: 'jp-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  post: any;

  constructor(
    private ContentService: ContentService,
    private NewPostService: NewPostService
  ) { }

  ngOnInit() {
    this.clear();
  }

  submit() {
    this.NewPostService.post(this.post).subscribe(
      (_res)=>{
        this.ContentService.refreshData();
        console.log('New post created');
      },
      err=>console.log('Error: ' + JSON.stringify(err))
    );
  }

  clear() {
    this.post = { title: '', content: '' };
  }
}
