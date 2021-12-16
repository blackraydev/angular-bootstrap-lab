import { Component, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Country } from 'src/models/ICountry';
import { Countries } from 'src/data/countries';

const search = (text: string, pipe: PipeTransform): Country[] => {
  return Countries.filter(country => {
    const term = text.toLowerCase();
    return country.name.toLowerCase().includes(term)
        || pipe.transform(country.area).includes(term)
        || pipe.transform(country.population).includes(term);
  });
}

@Component({
  selector: 'table-filtering',
  templateUrl: './table-filtering.html',
  providers: [DecimalPipe]
})
export class TableFiltering {
  countries$: Observable<Country[]>;
  filter = new FormControl('');

  constructor(pipe: DecimalPipe) {
    this.countries$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }
}
