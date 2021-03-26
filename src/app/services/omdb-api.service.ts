import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { IOMDResponse } from "../omdbresponse";

@Injectable({
  providedIn: 'root'
})

export class OmdbApiService {
  private _siteURL="https://www.ombdapi.com/";
  private _key="?apikey=12a6fa17&t=";
  private handleError(err:HttpErrorResponse) {
    console.log("OmdbApiService: " + err.message);
    return Observable.throw(err.message);
  }

  constructor(private _http:HttpClient) { }

  getMovieData(movieName) : Observable<IOMDResponse> {
    return this._http.get<IOMDResponse>(this._siteURL + this._key + movieName)
    .pipe(
      tap(data => console.log("Moviedata/error" + JSON.stringify(data))
    ),
      catchError(this.handleError)
    );
  }
}
