import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {ApiResponse} from './model/api.response';
@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }
    baseUrl = 'http://localhost:9003/api/products/';
   
    getProducts(): Observable<ApiResponse> {
      return this.http.get<ApiResponse>(this.baseUrl);
    }
}