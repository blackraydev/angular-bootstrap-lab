import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TableFiltering } from './table-filtering';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [TableFiltering],
  exports: [TableFiltering],
  bootstrap: [TableFiltering]
})
export class NgbdTableFilteringModule {}
