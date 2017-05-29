import { Component, OnInit } from '@angular/core';

import { ContentService } from './content.service';

@Component({
  selector: 'jp-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  constructor(
    public ContentService: ContentService
  ) { }

  ngOnInit() {
    this.ContentService.refreshData();
  }
}
