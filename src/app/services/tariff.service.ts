import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Tariff } from '../models/tariff';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.apiUrl + 'tariffs/';

  storeTariffInDb(tariff: Tariff) {
    return this.http.post(this.baseUrl, tariff);
  }

}
