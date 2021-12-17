import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Country } from 'src/models/ICountry';
import { Countries } from 'src/data/countries';

const search = (text: string): Country[] => {
  return Countries.filter(country => {
    const term = text.toLowerCase();
    return country.name.toLowerCase().includes(term)
  });
}

@Component({
  selector: 'table-filtering',
  templateUrl: './table-filtering.html',
})
export class TableFiltering {
  countries$: Observable<Country[]>;
  filter = new FormControl('');

  constructor() {
    this.countries$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text))
    );
  }
}
