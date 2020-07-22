import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../model/movieModel';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url:string = "https://movies.gateway.linkapi.solutions/v1/movies?apiKey=1719c97e-9d02-449e-aadb-67425bf715c5";
  static movies = [];
  nextID:number = 1;
  updatedMovie:Movies;

  constructor(
    private http: HttpClient,
  ) { 
    this.getMovies().subscribe((response)=> {
      response.forEach((item)=>{
        MoviesService.movies.push({
          name: item['title'],
          year: item['year'],
          rated: item['rated'],
          runtime: item['runtime'],
          genre: item['genre'].split(','),
          director: item['director'],
          actors: item['actors'].split(','),
          plot: item['plot'],
          url: item['poster'],
          favorite: false,
          id: this.nextID,
        })
        this.nextID++
      });
      console.log(MoviesService.movies)
    });
   }

  public getMovies(): Observable<any> { 
    return this.http.get(this.url);
  }

  public getData() {
    return MoviesService.movies;
  }

}
