import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, tap} from 'rxjs';

import { Country } from '../interfaces/country.interface'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://restcountries.com/v3.1';
  private fieldsParams = new HttpParams().set('fields', 'name,capital,flags,population,cca2');

  constructor(private http: HttpClient) { }

  searchByCountry(queryTerm: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${queryTerm}`;
    return this.http.get<Country[]>(url, {params: this.fieldsParams});
  }

  searchByCapital(queryTerm: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${queryTerm}`;
    return this.http.get<Country[]>(url, {params: this.fieldsParams});
  }

  searchByRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, {params: this.fieldsParams}).pipe(tap(console.log));
  }

  searchByCode(id: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

}
