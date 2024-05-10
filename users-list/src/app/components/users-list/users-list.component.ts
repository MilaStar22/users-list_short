import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, MatIconModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {
  usersList: User[] = [];
  foods: Food[] = [
    { value: 'sort-0', viewValue: 'A - Z' },
    { value: 'sort-1', viewValue: 'Z - A' }
  ];

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  protected readonly isNameFound: boolean = false;

  constructor(public usersService: UserService) { }

  ngOnInit(): void {
    this.usersList = this.usersService.getUsersList();
  }

  search(query: string) {
    return this.usersList = this.usersService.findUserName(query);
  }

  sortByMethod(query: string) {
    const direction = (query === 'sort-0') ? 1 : -1;
    return this.usersList.sort((a, b) => direction * ((a.username > b.username) ? 1 : -1));
  }
}
