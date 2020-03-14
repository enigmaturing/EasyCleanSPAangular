import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Machine } from '../models/machine';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  baseUrl = environment.apiUrl + 'machines/';

  constructor(private http: HttpClient) { }

  getMachines(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this.baseUrl);
  }

  // ToDo: Implement method getMachine(id)
}
