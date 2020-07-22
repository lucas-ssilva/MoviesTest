import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies } from 'src/app/model/movieModel';

@Component({
  selector: 'app-detalhes-do-filme',
  templateUrl: './detalhes-do-filme.component.html',
  styleUrls: ['./detalhes-do-filme.component.scss']
})
export class DetalhesDoFilmeComponent implements OnInit {
  
  movieSelected: Movies;
  favorite:boolean;
  id:number;
  index:number;

  constructor(
    private activated : ActivatedRoute,
    private movie: MoviesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activated.snapshot.params['id'];
    this.id = this.activated.snapshot.params['id'];
    this.loadMovie();
  }

  favoritar(i:number) {
    this.movieSelected.favorite = true;
    this.favorite = true;
    MoviesService.movies[this.index].favorite = true;
  }

  desfavoritar(i:number) {
    this.movieSelected.favorite = false;
    this.favorite = false;
    MoviesService.movies[this.index].favorite = false;
  }

  back() {
    this.movie.updatedMovie = this.movieSelected;
    this.router.navigate(['/listaDeFilmes']);
  }

  loadMovie() {

    this.movieSelected = MoviesService.movies.find(x => x.id == this.id);
    this.index = MoviesService.movies.findIndex(x => x.id == this.id);
    this.favorite = this.movieSelected.favorite;
  }



}
