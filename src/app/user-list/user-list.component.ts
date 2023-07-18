import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {take} from "rxjs";
import {ITableColumn, IUserList} from "../interfaces";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: IUserList[] = [];
  tableColumn: ITableColumn[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.tableColumn = [
      {columnKey: 'name', columnName: 'Name'},
      {columnKey: 'username', columnName: 'User Name'},
      {columnKey: 'email', columnName: 'Email'},
      {columnKey: 'birthday', columnName: 'D.O.B'},
    ]
    this.getUsersList();
  }

  getUsersList(): void {
    this.http.get<IUserList[]>(`https://run.mocky.io/v3/2dcc7a8b-0952-4d52-b374-b85e8d6611d6`).pipe(take(1)).subscribe(res => {
      this.userList = res;
    })
  }
}
