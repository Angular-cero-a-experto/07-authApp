import { Component, OnInit } from '@angular/core';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

    autenticado: boolean = false ;

    // Inject the authentication service into your component through the constructor
    constructor(public auth: AuthService) {}

    ngOnInit(): void {
      this.auth.isAuthenticated$.subscribe( autenticado => {
        this.autenticado = autenticado;
        console.log(this.autenticado);
      } )
    }

    ingresar() {
      this.auth.loginWithRedirect();
    }
    salir() {
      this.auth.logout();
    }

}
