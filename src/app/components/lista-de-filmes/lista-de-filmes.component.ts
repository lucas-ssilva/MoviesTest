import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/model/movieModel';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-lista-de-filmes',
  templateUrl: './lista-de-filmes.component.html',
  styleUrls: ['./lista-de-filmes.component.scss']
})
export class ListaDeFilmesComponent implements OnInit {

  movies:Movies[] = [];
  filteredList = [];
  favorites = [];
  
  listNames: string[] = [
    'Whiplash',
    'Pulp Fiction ',
    'Avengers: Endgame',
    'The Wolf of Wall Street',
    'Interstellar',
    'Doctor Strange',
    'The Silence of the Lambs',
    'Forrest Gump',
    'The Green Mile',
    'Rear Window',
    'The Shining',
    'Eternal Sunshine of the Spotless Mind',
    'Tonari no Totoro',
    'Room',
    'Into the Wild',
  ]

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  movieSelected:string;
  filtered:boolean = false;
  listaVazia: boolean = false;
  onlyFavorites: boolean = false;

  constructor(
    private router: Router,
    private movie: MoviesService 
  ) {}

  ngOnInit(): void {
    this.movies = MoviesService.movies;
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.movieSelected = value;
    return this.listNames.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  favoritar(i:number) {
    this.movies[i].favorite = true;
    MoviesService.movies[i].favorite = true;
  }

  desfavoritar(i:number) {
    this.movies[i].favorite = false;
    MoviesService.movies[i].favorite = false;
  }

  buscar() {
   const filter = this.movies.find(x => x.name == this.movieSelected)
   if(this.movieSelected.length == 0) {

   } else {
   if(filter == null) {
    this.filteredList.splice(0,2)
    this.listaVazia = true;
   } else {
   this.filteredList.splice(0,2);
   this.filteredList.push(filter);
   this.filtered = true;
   this.listaVazia = false;
      }
    }
  }

  allFavorites() {
    this.filtered = false;
    this.movies.forEach((item) => {
    if(item.favorite == true) {
      this.favorites.push(item);
      console.log(this.favorites);
        }
      }
    );
    if(this.favorites.length > 0) {
    this.filtered = false;
    this.listaVazia = false;
    this.onlyFavorites = true;
    } else {
      this.onlyFavorites = true;
      this.listaVazia = true;
    }
  }

  allMovies() {
    this.favorites.forEach((item)=> {
      this.favorites.splice(item)
    });
    this.filtered = false;
    this.listaVazia = false;
    this.onlyFavorites = false;
  }

  userScreen() {
    this.router.navigate(['/user'])
  }

}


