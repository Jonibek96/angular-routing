import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import {slideInOutAnimation} from '../../../shared/animations/side.animation';
import {WorkersModel} from '../../../model/workers.model';
import {WorkersService} from '../../../model/workers.service';

@Component({
  selector: 'app-workers-add',
  templateUrl: './workers-add.component.html',
  styleUrls: ['./workers-add.component.css'],
  animations: [slideInOutAnimation],
  host: {'[@slideInOutAnimation]': ''}
})
export class WorkersAddComponent implements OnInit {
  workers: WorkersModel = new WorkersModel();
  worker: WorkersModel[] = [];
  disableBitton: boolean = true;
  constructor(private service: WorkersService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
      this.saveWorkers(this.workers);
      form.reset();
      this.router.navigateByUrl('/system/workers');
  }

  saveWorkers(worker: WorkersModel) {
    if (worker.id == null || worker.id == 0) {
      this.service.saveWorkers(worker)
        .subscribe((data: any) => this.worker.push(data));
    } else {
      console.log('update');
    }
  }
}
