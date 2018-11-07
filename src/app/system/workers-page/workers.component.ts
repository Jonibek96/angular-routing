import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {WorkersService} from '../../model/workers.service';
import {WorkersModel} from '../../model/workers.model';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
})
export class WorkersComponent implements OnInit {
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;
  search = '';
  workers: WorkersModel[] = [];
  editworkers: WorkersModel;
  public selectedWorkers = null;
  public workersPerPage = 4;
  public selectedPage = 1;
  isNewRecord: boolean;
  statusMessage: string;

  constructor(private service: WorkersService) {}

  ngOnInit() {
    this.loadWorkers();
  }

  private loadWorkers() {
    this.service.getWorkers().subscribe((data: WorkersModel[]) => {
      this.workers = data;
    });
  }

  deleteWorkers(id: number) {
    this.service.delete(id)
      .subscribe(data => {
        this.workers = this.workers.filter(el => el.id !== id);
      });
    this.showMessage(this.statusMessage = 'Data successfully deleted');
  }

  editWorker(work: WorkersModel) {
    this.editworkers = new WorkersModel(work.id, work.name, work.birthday, work.city, work.family, work.tel, work.email);
  }

  loadTemplate(work: WorkersModel) {
    if (this.editworkers && this.editworkers.id === work.id) {
      return this.editTemplate;
    }
  }

  showMessage(messeage: any) {
    this.statusMessage = messeage;
    window.setTimeout(() => {
      this.statusMessage = '';
    }, 2000);
  }

  saveWorkers() {
    if (this.isNewRecord) {
      this.service.saveWorkers(this.editworkers).subscribe((data) => {
        this.showMessage(this.statusMessage = 'Data successfully added');
        this.loadWorkers();
      });
      this.editworkers = null;
    } else {
      this.service.update(this.editworkers.id, this.editworkers).subscribe((data) => {
        this.showMessage(this.statusMessage = 'Data successfully updated');
        this.loadWorkers();
      });
      this.editworkers = null;
    }
  }

  cancel() {
    this.editworkers = null;
  }

  getWorkers(worker: string = null): WorkersModel [] {
    return this.workers
      .filter(p => worker == null || worker == p.name);
  }

  get workersPage(): WorkersModel [] {
    let pageIndex = (this.selectedPage - 1) * this.workersPerPage;
    return this.getWorkers(this.selectedWorkers)
      .slice(pageIndex, pageIndex + this.workersPerPage);
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.workersPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(this.getWorkers(this.selectedWorkers).length / this.workersPerPage);
  }

}
