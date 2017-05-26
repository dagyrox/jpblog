import { Component, OnInit } from '@angular/core';

import { ContentService } from './content.service';

@Component({
  selector: 'jp-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  posts: Array<any>;
  constructor(
    private ContentService: ContentService
  ) { }

  ngOnInit() {
    this.ContentService.getPosts().subscribe(
      (_posts) => {
        this.posts = _posts;
        console.log(_posts);
      },
      err => console.log('Error: ' + JSON.stringify(err))
    );
  }
}
