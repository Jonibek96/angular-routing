import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-system',
  templateUrl: '/system.component.html'
})
export class SystemComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}
