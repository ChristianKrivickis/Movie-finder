import { Component } from '@angular/core';
import { OmdbApiService } from "./services/omdb-api.service";
import { IOMDResponse } from "./omdbresponse";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OmdbApiService]
})

export class AppComponent {
  
  movieData:IOMDResponse;
  errorMessage:any;

  constructor(private _ombdbService:OmdbApiService) {}

  getMovieDetails(movieName:string) : boolean {
    this._ombdbService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData=movieData;
        console.log("Director Name: " + this.movieData.Director);
      },
      error => this.errorMessage = <any>error
    );
    return false;
  }
}
