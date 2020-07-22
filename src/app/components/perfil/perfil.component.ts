import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/userModel';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  genres: string[] = [
    'Horror',
    'Comedy',
    'Drama',
    'Sci-Fi',
    'Adventure',
    'Action'
  ]

  name:string;
  age:number;
  favoriteMovie:string;
  favoriteGenre:string;


  constructor(
    private router: Router,
    private user: UserService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  save() {
    this.user.users.push({
      name: this.name,
      age: this.age,
      favoriteMovie: this.favoriteMovie,
      favoriteGenre:this.favoriteGenre
    });
    this.router.navigate(['/listaDeFilmes'])
  }

  cancel() {
    this.name = '';
    this.age = 0;
    this.favoriteMovie = '';
    this.favoriteGenre = null;
    this.router.navigate(['/listaDeFilmes'])
  }

  loadData() {
    if(this.user.users.length > 0 ){
      this.name = this.user.users[0].name;
      this.age = this.user.users[0].age;
      this.favoriteMovie = this.user.users[0].favoriteMovie;
      this.favoriteGenre = this.user.users[0].favoriteGenre;
    }
  }
}