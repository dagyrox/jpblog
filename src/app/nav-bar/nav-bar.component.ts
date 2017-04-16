import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jp-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  hide = true;
  constructor() { }

  ngOnInit() {
  }

}
