import { Component, OnInit } from '@angular/core';
declare var sidebarToggle:any

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    sidebarToggle();
  }

}
