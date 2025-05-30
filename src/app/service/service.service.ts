import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url: string = 'https://dummyjson.com/products'

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(`${this.url}/categories`);
  }

  getTopProducts() {
    return this.http.get(`${this.url}?sortBy=rating&order=desc`);
  }

  getProductsByCategories(list_name: string) {
    return this.http.get(`${this.url}/category/${list_name}`)
  }
}
