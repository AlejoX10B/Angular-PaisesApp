import { Component } from '@angular/core';

import { CountryService } from "../../services/country.service";
import {tap} from "rxjs";
import {Country} from "../../interfaces/country.interface";

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {

  countries: Country[] = [];

  activeRegion: string = '';
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  constructor(private countryService: CountryService) { }

  getCssBtnClass(region: string): string {
    return region === this.activeRegion ? 'btn-primary' : 'btn-outline-primary';
  }

  clickRegion(region: string): void {

    if (region == this.activeRegion) return;

    this.activeRegion = region;

    this.countries = [];
    this.countryService.searchByRegion(this.activeRegion)
      .subscribe((resp) => {
        this.countries = resp;
      });
  }

}
