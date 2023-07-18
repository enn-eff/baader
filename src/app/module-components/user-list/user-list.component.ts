// Import necessary modules and interfaces
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ITableColumn, IUserList } from '../../interfaces';
import { FetchTableDataService } from '../../services/fetchTableDataService.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  // Array to store the list of users fetched from the server
  userList: IUserList[] = [];

  // Array to define the table columns to display in the UI
  tableColumn: ITableColumn[] = [];

  constructor(private httpService: FetchTableDataService) {}

  ngOnInit(): void {
    // Define the table columns with their respective names and keys
    this.tableColumn = [
      { columnKey: 'name', columnName: 'Name' },
      { columnKey: 'username', columnName: 'User Name' },
      { columnKey: 'email', columnName: 'Email' },
      { columnKey: 'birthday', columnName: 'D.O.B' },
    ];

    // Fetch the list of users from the server on component initialization
    this.getUsersList();
  }

  // Fetch the list of users from the server
  getUsersList(): void {
    this.httpService
      .getUsersList()
      .pipe(take(1))
      .subscribe((res) => {
        // Assign the fetched user list to the component property
        this.userList = res;
      });
  }
}
