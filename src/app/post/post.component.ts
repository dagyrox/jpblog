import { Component, OnInit, Input } from '@angular/core';

import { PostService } from './post.service';

@Component({
  selector: 'jp-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: any;

  number: number;
  date: Date;
  author: string;
  comments: Array<any>;
  content: string;
  
  constructor(private PostService: PostService) { }

  ngOnInit() {
    this.post = this.post || {};
  }

  deletePost(id:string){
    this.PostService.deletePost(id);
  }
}
