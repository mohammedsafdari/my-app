import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  // getAllProducts(){
  //   return [];
  // }

  getAllProducts(){
    return this.http.get('/assets/data/product.json');
  }
}
