import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

const usersList: User[] = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "role": "Admin",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org"
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "role": "Admin",
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net"
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "role": "User",
    "phone": "1-463-123-4447",
    "website": "ramiro.info"
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "role": "User",
    "phone": "493-170-9623 x1567",
    "website": "kale.biz"
  },

  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "role": "User",
    "phone": "(254)954-1289",
    "website": "demarco.info"

  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "role": "Admin",
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org"

  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "role": "Admin",
    "phone": "210.067.6132",
    "website": "elvis.io"

  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "role": "User",
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com"
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "role": "User",
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com"
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "role": "User",
    "phone": "024-648-3804",
    "website": "ambrose.net"
  }
]

@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor() { }

  getUsersList() {
    return usersList;
  }

  findUserName(name: string): User[] {
    return this.getUsersList().filter(item => item.name.toLowerCase().includes(name));
  }
}
