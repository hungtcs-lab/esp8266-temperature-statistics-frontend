import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss'],
})
export class HeaderNavigationComponent implements OnInit {
  @Input('name')
  name: string;

  constructor() { }

  ngOnInit() {
  }

}
