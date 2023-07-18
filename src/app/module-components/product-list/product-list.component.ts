import { Component, OnInit } from '@angular/core';
import { IProductList, ITableColumn, IUserList } from '../../interfaces';
import { take } from 'rxjs';
import { FetchTableDataService } from '../../services/fetchTableDataService.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  // Array to store the list of products fetched from the server
  productList: IProductList[] = [];

  // Array to define the table columns to display in the UI
  tableColumn: ITableColumn[] = [];

  constructor(private httpService: FetchTableDataService) {}

  ngOnInit(): void {
    // Define the table columns with their respective names and keys
    this.tableColumn = [
      { columnKey: 'image', columnName: 'Product Image', image: true },
      { columnKey: 'title', columnName: 'Product Title' },
      { columnKey: 'description', columnName: 'Product Description' },
      { columnKey: 'category', columnName: 'Product Category' },
      { columnKey: 'price', columnName: 'Product Price' },
      { columnKey: 'rating', columnName: 'Rating', nestedColumns: ['rate'] },
    ];

    // Fetch the list of products from the server on component initialization
    this.getProductList();
  }

  // Fetch the list of products from the server
  getProductList(): void {
    this.httpService
      .getProductList()
      .pipe(take(1))
      .subscribe((res) => {
        this.productList = res;
      });
  }
}
