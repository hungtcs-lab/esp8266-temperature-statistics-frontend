import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cillboard',
  templateUrl: './cillboard.component.html',
  styleUrls: ['./cillboard.component.scss']
})
export class CillboardComponent implements OnInit {
  @Input('name')
  name: string;
  @Input('value')
  value: string;
  @Input('css-class')
  cssClass: string;
  @Input('color')
  color: string;
  
  
  constructor() { }

  ngOnInit() {
  }

}
