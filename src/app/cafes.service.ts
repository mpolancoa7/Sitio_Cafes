import { Injectable } from '@angular/core';

//importar libreria
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CafesService {

  constructor(private http:HttpClient) { }

  getProductos():any{
    //local
    //return this.http.get('http://127.0.0.1:8000/api/productosall/');

    //mi api
    return this.http.get('https://web-development-fcc7.up.railway.app/api/productosall/');

    //api ing
    //return this.http.get('https://arquitecturaback-production.up.railway.app/api/productosall/');
    
  }
}
