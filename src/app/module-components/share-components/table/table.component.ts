import { Component, Input, OnInit } from '@angular/core';
import { ITableColumn } from '../../../interfaces';
enum SortDirection {
  Ascending,
  Descending,
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  searchText: string = '';
  sortDirection: { [key: string]: SortDirection } = {};
  @Input() tableColumn: ITableColumn[] = [];
  @Input() tableData: any;
  currentPage = 1;
  itemsPerPage = 5;
  dataBeforeUpdate: any;

  constructor() {}

  ngOnInit(): void {}

  getInputType(data: any) {
    if (typeof data === 'string') {
      return 'text';
    } else {
      return 'number';
    }
  }

  getNestedProperty(data: any, col: ITableColumn): any {
    if (col.nestedColumns && data[col.columnKey]) {
      return this.getNestedValue(data[col.columnKey], col.nestedColumns);
    } else {
      return 'N/A'; // Handle case when the nested object is not available
    }
  }

  getNestedValue(data: any, keys: string[]): any {
    for (const key of keys) {
      if (!data.hasOwnProperty(key)) {
        return 'N/A'; // Handle case when a nested key is not found
      }
      data = data[key];
    }
    return data;
  }

  sortData(columnKey: string, nestedColumn?: ITableColumn) {
    if (typeof this.sortDirection[columnKey] === 'undefined') {
      this.sortDirection[columnKey] = SortDirection.Ascending;
    } else {
      this.sortDirection[columnKey] =
        this.sortDirection[columnKey] === SortDirection.Ascending
          ? SortDirection.Descending
          : SortDirection.Ascending;
    }

    this.tableData.sort((a: any, b: any) => {
      let valueA = a[columnKey];
      let valueB = b[columnKey];
      if (nestedColumn) {
        valueA = this.getNestedProperty(a, nestedColumn);
        valueB = this.getNestedProperty(b, nestedColumn);
      }

      const sortOrder =
        this.sortDirection[columnKey] === SortDirection.Ascending ? 1 : -1;

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return sortOrder * valueA.localeCompare(valueB);
      } else if (typeof valueA === 'number' && typeof valueB === 'number') {
        return sortOrder * (valueA - valueB);
      } else {
        return 0; // Add more handling for other data types if needed
      }
    });
  }

  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.tableData.slice(startIndex, endIndex);
  }

  onPageChanged(page: number) {
    this.currentPage = page;
  }

  // Get an array of page numbers to display in pagination
  getPages() {
    const totalPages = this.getTotalPages();
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Get the total number of pages
  getTotalPages() {
    return Math.ceil(this.tableData.length / this.itemsPerPage);
  }

  editTableData(dataId: any): void {
    const dataToUpdate = this.tableData.find((obj: any) => obj.id === dataId);
    this.dataBeforeUpdate = { ...dataToUpdate };
    if (dataToUpdate) {
      dataToUpdate.editData = true;
    }
  }

  cancelUpdate(dataId: any): void {
    const indexToUpdate = this.tableData.findIndex(
      (obj: any) => obj.id === dataId
    );
    if (indexToUpdate !== -1) {
      this.tableData[indexToUpdate] = { ...this.dataBeforeUpdate };
    }
  }

  updateTableData(dataId: any): void {
    const dataToUpdate = this.tableData.find((obj: any) => obj.id === dataId);
    this.dataBeforeUpdate = { ...{} };
    if (dataToUpdate) {
      dataToUpdate.editData = false;
    }
  }
}
