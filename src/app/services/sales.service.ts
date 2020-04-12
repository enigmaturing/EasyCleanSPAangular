import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MachineUsage } from '../models/machine-usage';
import { Topup } from '../models/topup';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  baseUrl = environment.apiUrl + 'sales/';

  constructor(private http: HttpClient) { }

  getMachineUsages(): Observable<MachineUsage[]> {
    return this.http.get<MachineUsage[]>(this.baseUrl);
  }

  topupClientAccount(topup: Topup) {
    return this.http.post(this.baseUrl + 'topups', topup);
  }
}
