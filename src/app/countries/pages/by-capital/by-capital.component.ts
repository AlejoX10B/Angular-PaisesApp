import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  queryTerm: string = '';
  existsError: boolean = false;
  countries: Country[] = []

  constructor(private countryService: CountryService) { }

  suggest(queryTerm: string): void {
    this.existsError = false;
  }

  search(queryTerm: string): void {
    this.existsError = false;
    this.queryTerm = queryTerm;

    this.countryService.searchByCapital(this.queryTerm)
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
