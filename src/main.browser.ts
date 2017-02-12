import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import {  enableProdMode } from '@angular/core';


import { LOCALE_ID, TRANSLATIONS_FORMAT, TRANSLATIONS} from '@angular/core';

if (ENV === 'prod') {
    enableProdMode();
}

let options: any = {
    providers: [
        {provide: TRANSLATIONS, useValue: require('./i18n/messages.da.xlf')},
        {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
        {provide: LOCALE_ID, useValue: 'da'}
    ]
};

platformBrowserDynamic()
    .bootstrapModule(AppModule, options)
    .catch(err => console.error(err));
