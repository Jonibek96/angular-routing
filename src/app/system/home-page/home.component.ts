import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {WorkersService} from '../../model/workers.service';
import {WorkersModel} from '../../model/workers.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  workers: WorkersModel[] = [];

  constructor(private service: WorkersService,
              private router: Router,
              private rout: ActivatedRoute) {
    this.service.getWorkers().subscribe((data: WorkersModel[]) => {
      this.workers = data;
    });
  }

  toPage() {
  }

}
