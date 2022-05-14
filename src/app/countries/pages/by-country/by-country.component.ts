import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [`li {cursor: pointer;}`]
})
export class ByCountryComponent {

  queryTerm: string = '';
  existsError: boolean = false;
  showSuggestions: boolean = false;

  countries: Country[] = [];
  suggestions: Country[] = [];

  constructor(private countryService: CountryService) { }

  suggest(queryTerm: string): void {
    this.existsError = false;
    this.showSuggestions = true;

    this.queryTerm = queryTerm;

    this.countryService.searchByCountry(queryTerm)
      .subscribe({
        next: (resp) => {
          this.suggestions = resp.splice(0,5);
        },
        error: (err) => {
          this.suggestions = [];
        }
      });
  }

  search(queryTerm: string): void {
    this.existsError = false;
    this.showSuggestions = false;

    this.countryService.searchByCountry(this.queryTerm)
      .subscribe({
        next: (resp) => {
          this.countries = resp;
        },
        error: (err) => {
          this.existsError = true;
          this.countries = [];
          console.info('Error', err);
        }
      });
  }

}
