import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {AnimateRout} from '../shared/animations/animate-routing';

@Component({
  selector: 'app-system',
  templateUrl: '/system.component.html',
  animations: [AnimateRout]
})
export class SystemComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData['page'] || 'home';
  }
}
