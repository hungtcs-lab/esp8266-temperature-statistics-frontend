import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

const M:any = window.M;

@Component({
  selector: 'slide-navigation',
  templateUrl: './slide-navigation.component.html',
  styleUrls: ['./slide-navigation.component.scss']
})
export class SlideNavigationComponent implements OnInit, AfterViewInit {
  @ViewChild('navigation')
  private navigation: ElementRef;
  private slideNav: any;

  constructor() { }

  ngOnInit() {
    console.log(this.navigation);
  }

  ngAfterViewInit() {
    console.log(this.navigation);
    let { nativeElement } = this.navigation;
    this.slideNav = M.Sidenav.init(nativeElement, {  });
  }

  show() {
    this.slideNav.open();
  }

}
