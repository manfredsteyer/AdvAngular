import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    needLogin: boolean;

    constructor(
        private route: ActivatedRoute,
        private oauthService: OAuthService
    ) {
    }

    login() {
      this.oauthService.initImplicitFlow();
    }

    logout() {
      this.oauthService.logOut();
    }

    get givenNamen() {
      let claims = this.oauthService.getIdentityClaims();
      if (!claims) return null;
      return claims.given_name;
    }

    ngOnInit() {
        this.route.params.subscribe((p) => {
            this.needLogin = (p['needLogin'] === 'true');
        });
    }
}
