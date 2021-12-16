import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {NgbdTableFilteringModule} from './app/table-filtering.module';

platformBrowserDynamic().bootstrapModule(NgbdTableFilteringModule)
  .catch(err => console.error(err));
