import { Component, OnInit } from '@angular/core';
import {IProductList, ITableColumn, IUserList} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {take} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: IProductList[] = [];
  tableColumn: ITableColumn[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.tableColumn = [
      {columnKey: 'image', columnName: 'Product Image', image: true},
      {columnKey: 'title', columnName: 'Product Title'},
      {columnKey: 'description', columnName: 'Product Description'},
      {columnKey: 'category', columnName: 'Product Category'},
      {columnKey: 'price', columnName: 'Product Price'},
      {columnKey: 'rating', columnName: 'Rating', nestedColumns: ['rate']},
    ]
    this.getUsersList();
  }

  getUsersList(): void {
    this.http.get<IProductList[]>(`https://fakestoreapi.com/products`).pipe(take(1)).subscribe(res => {
      this.productList = res;
    })
  }
}
