import { trigger, transition } from '@angular/animations';
import { Component } from '@angular/core';
import { swipeRight, swipeLeft } from 'src/app/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('Sources => *', swipeRight()),
      transition('About => *', swipeLeft()),
      transition('Portfolio => Sources', swipeLeft()),
      transition('Portfolio => About', swipeRight()),
    ])
  ]
})
export class PagesComponent {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
