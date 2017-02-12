// Vendors

// Angular
import '@angular/core';
import '@angular/http';
import '@angular/router';
import '@angular/common';
import '@angular/forms';

// RxJS 5
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/Observable';
import 'rxjs/BehaviorSubject';
import 'rxjs/Subscription';

// HammerJS Touch Gestures
import 'hammerjs/hammer';

// ng2-translate
import 'ng2-translate';

// oauth2
import 'angular-oauth2-oidc';

// Bootstrap JavaScript
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

// Unabhängige Dateien kopieren
import '!file-loader?name=/data/passengers.json!./data/passengers.json';
