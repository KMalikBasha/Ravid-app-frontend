import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: any = 'https://dev-for-frontend.azurewebsites.net';
  constructor(private http: HttpClient) {}

  getCategoryData() {
    return this.http.get(this.url + '/api/category/get');
  }
  getProductData() {
    return this.http.get(this.url + '/api/Product/get');
  }

  getProductsByCategory(Id: any) {
    return this.http.get(this.url + `/api/Product/getProducts/${Id}`);
  }
  craeteProduct(data: any) {
    return this.http.post(this.url + '/api/Product/create', data);
  }

  craeteCategory(data: any) {
    return this.http.post(this.url + '/api/category/create', data);
  }

  deleteCategory(id: any) {
    return this.http.delete(this.url + `/api/category/${id}/delete`);
  }
}
