import { Component, OnInit } from '@angular/core';

import{ ContentService } from './content.service';

@Component({
  selector: 'jp-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  posts = [];
  constructor(
    private ContentService: ContentService
  ) { }

  ngOnInit() {
    this.posts = this.ContentService.getPosts();
    this.ContentService.getComments().subscribe(posts => {console.log(JSON.stringify(posts));},
    err=>{console.log('Error: ' + err);});
  }

}
