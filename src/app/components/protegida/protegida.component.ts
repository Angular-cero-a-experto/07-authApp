import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrls: ['./protegida.component.css']
})
export class ProtegidaComponent {

  usuario:any = {};

  constructor( public auth: AuthService ) {
    this.auth.user$.subscribe(  usuario => {
      this.usuario = usuario; 
      console.log( this.usuario );
    } )
  }
}
