import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'flight-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public info: string = 'Welt';
    public showWaitInfo: boolean = true;

    constructor(
        private router: Router,
        private oauthService: OAuthService,
        private translate: TranslateService) {
    }

    ngOnInit() {
        this.initNgTranslate();
        this.initRouterEvents();
        this.initAuth();
    }

    private initNgTranslate() {
        this.translate.addLangs(['en', 'da']);
        this.translate.setDefaultLang('da');
        this.translate.use('da');
    }

    private initRouterEvents() {
        this.router.events.subscribe(
            (event) => {
                if (event instanceof NavigationStart) {
                    this.showWaitInfo = true;
                }
                if (event instanceof NavigationEnd
                    || event instanceof NavigationCancel
                    || event instanceof NavigationError) {
                    this.showWaitInfo = false;
                }
            }
        );
    }

    private initAuth() {

      // URL of the SPA to redirect the user to after login
      this.oauthService.redirectUri = window.location.origin + "/index.html";

      // The SPA's id. The SPA is registerd with this id at the auth-server
      this.oauthService.clientId = "spa-demo";

      // set the scope for the permissions the client should request
      // The first three are defined by OIDC. The 4th is a usecase-specific one
      this.oauthService.scope = "openid profile email voucher";

      // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
      // OAuth2-based access_token
      this.oauthService.oidc = true;

      // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
      // instead of localStorage
      this.oauthService.setStorage(sessionStorage);

      // The name of the auth-server that has to be mentioned within the token
      this.oauthService.issuer = "https://steyer-identity-server.azurewebsites.net/identity";

      // Load Discovery Document and then try to login the user
      this.oauthService.loadDiscoveryDocument().then(() => {

        // This method just tries to parse the token(s) within the url when
        // the auth-server redirects the user back to the web-app
        // It dosn't send the user the the login page
        this.oauthService.tryLogin({});

      });

    }

}



