import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {WorkersModel} from './workers.model';

@Injectable()
export class WorkersService {
  constructor(private http: HttpClient) {
  }

  getWorkers(): Observable<any> {
    return this.http.get(`http://localhost:3000/workers`);
  }

  saveWorkers(worker: WorkersModel): Observable<any> {
    return this.http.post(`http://localhost:3000/workers`, worker);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`http://localhost:3000/workers/${id}`, id);
  }

  update(id: number, worker: WorkersModel): Observable<any>{
    return this.http.put(`http://localhost:3000/workers/${worker.id}`, worker);
  }
}
