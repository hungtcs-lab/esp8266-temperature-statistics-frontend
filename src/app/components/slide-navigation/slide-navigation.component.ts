import { Component, Input, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'slide-navigation',
  templateUrl: './slide-navigation.component.html',
  styleUrls: ['./slide-navigation.component.scss']
})
export class SlideNavigationComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('navigation')
  private navigation: ElementRef;
  @Input('menus')
  private menus: Array<any> = [];
  private slideNav: any;

  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.slideNav.destroy();
  }

  ngAfterViewInit() {
    let { nativeElement } = this.navigation;
    this.slideNav = (<any>window).M.Sidenav.init(nativeElement, {
      inDuration: 300,
      outDuration: 300,
    });
  }

  open() {
    this.slideNav.open();
  }

  close() {
    this.slideNav.close();
  }

}
