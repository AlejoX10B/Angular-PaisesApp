import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/country.interface'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchByCountry(queryTerm: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${queryTerm}`;
    return this.http.get<Country[]>(url);
  }

  searchByCapital(queryTerm: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${queryTerm}`;
    return this.http.get<Country[]>(url);
  }

  searchByCode(id: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country[]>(url);
  }

}
