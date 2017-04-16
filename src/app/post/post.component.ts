import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jp-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() number: number;
  @Input() date: string;
  @Input() author: string;
  @Input() comments: Array<any>;
  @Input() content: string;
  constructor() { }

  ngOnInit() {
  }

}
