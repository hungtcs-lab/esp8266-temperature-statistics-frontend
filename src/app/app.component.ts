import { Component, OnInit, Input } from '@angular/core';
import { SlideNavigationComponent } from './components/slide-navigation/slide-navigation.component'
import 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input('slideNavigation')
  private slideNavigation: SlideNavigationComponent;

  ngOnInit() {

  }

}
