import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { IOMDResponse } from "../omdbresponse";

@Injectable({
  providedIn: 'root'
})

export class OmdbApiService {
  private _siteURL="https://www.omdbapi.com/";
  private _id="?t=";
  private _key="&apikey=cf23251a";
  private handleError(err:HttpErrorResponse) {
    console.log("OmdbApiService: " + err.message);
    return Observable.throw(err.message);
  }

  constructor(private _http:HttpClient) { }

  getMovieData(movieName) : Observable<IOMDResponse> {
    return this._http.get<IOMDResponse>(this._siteURL + this._id + movieName + this._key)
    .pipe(
      tap(data => console.log("Moviedata/error" + JSON.stringify(data) + "\tStudent ID: S00198911 | Student Name: Christian Krivickis")
    ),
      catchError(this.handleError),
    );
  }
}
