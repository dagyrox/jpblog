import { Component, OnInit, Input } from '@angular/core';

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
  
  constructor() { }

  ngOnInit() {
    this.post = this.post || {};
  }

}
