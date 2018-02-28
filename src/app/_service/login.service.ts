import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
    
    private url: string = 'http://localhost:3000/usuario';

    logeado : boolean = false;
    
 
    constructor(private http: HttpClient, private router: Router) {
    }

    login(nombre_usuario: string, contrasena: string){
       // this.logeado = true;
        //return this.logeado;
        let body = JSON.parse(`{"nombre_usuario" : "${nombre_usuario}", "contrasena":"${contrasena}"}`);
        return this.http.post(`${this.url}/login`, body);
    }

    estaLogeado() {
       // return this.logeado;
       let flag = sessionStorage.getItem("flagUser");
        return +flag;
    }

    cerrarSesion(){
        //this.logeado = false;
        sessionStorage.removeItem("flagUser");        
        this.router.navigate(['login']);
    }

}