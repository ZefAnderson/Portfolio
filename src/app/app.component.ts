import { trigger, transition, style, animateChild, group, animate, query } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { swipeLeft } from './animations';
import { swipeRight } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('Sources => *', swipeRight()),
      transition('About => *', swipeLeft()),
      transition('Portfolio => Sources', swipeLeft()),
      transition('Portfolio => About', swipeRight()),
    ])
  ]
})
export class AppComponent {
  title = 'portfolio';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


}
