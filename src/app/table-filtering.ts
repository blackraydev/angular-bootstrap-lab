import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ICountry } from 'src/models/ICountry';
import { searchQuery } from 'src/utils/searchQuery';

@Component({
  selector: 'table-filtering',
  templateUrl: './table-filtering.html',
})
export class TableFiltering {
  countries$: Observable<ICountry[]>;
  filter = new FormControl('');

  constructor() {
    this.countries$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => searchQuery(text))
    );
  }
}