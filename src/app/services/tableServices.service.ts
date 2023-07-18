// Import necessary modules and decorators from Angular core.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';

// Import the interfaces used by the service.
import { IProductList, IUserList } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(private http: HttpClient) {}

  // Method to fetch the list of users from the server.
  getUsersList(): Observable<IUserList[]> {
    return this.http.get<IUserList[]>(
      `https://run.mocky.io/v3/2dcc7a8b-0952-4d52-b374-b85e8d6611d6`
    );
  }

  // Method to fetch the list of products from the server.
  getProductList(): Observable<IProductList[]> {
    return this.http.get<IProductList[]>(`https://fakestoreapi.com/products`);
  }
}

// The `TableService` class is decorated with `@Injectable` so that it can be provided as a singleton service throughout the app.
// It provides methods to fetch data from different endpoints and return the data as observables.
