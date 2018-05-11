import { Component, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {
  @ViewChild('navigation')
  navigation: ElementRef;


  constructor() {
    // console.log(this.navigation);
  }

  ngAfterViewInit() {
    console.log('on init');
    console.log(this.navigation);
  }

  show() {
    console.log('clicked');
  }

}
