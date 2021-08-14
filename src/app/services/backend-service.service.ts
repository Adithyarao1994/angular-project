import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BackendServiceService {
  constructor(private httpClient: HttpClient) {}

  userDetails: any;
  loggedInUser: any;

  getUsers(): Observable<any> {
    return this.httpClient
      .get("https://jsonplaceholder.typicode.com/users")
      .pipe(
        map((data) => {
          this.userDetails = data;
          sessionStorage.setItem(
            "UserDetails",
            JSON.stringify(this.userDetails)
          ); //Using sessionStorage to cache the userDetails
          return data;
        }),
        catchError(this.errorHandler)
      );
  }
  getLoggedInUser(id) {
    const userDetails = JSON.parse(sessionStorage.getItem("UserDetails"));
    for (let i in userDetails) {
      if (userDetails[i].id == id) {
        this.loggedInUser = userDetails[i];
      }
    }
    return this.loggedInUser; // Returns the cached userDetails for innerPages
  }
  getPosts(id): Observable<any> {
    let userId = new HttpParams().set("userId", id);
    return this.httpClient
      .get("https://jsonplaceholder.typicode.com/posts/", {
        params: userId,
      })
      .pipe(catchError(this.errorHandler));
  }
  getAlbumImages(id): Observable<any> {
    let albumId = new HttpParams().set("albumId", id);
    return this.httpClient
      .get("https://jsonplaceholder.typicode.com/photos/", {
        params: albumId,
      })
      .pipe(catchError(this.errorHandler));
  }
  editPosts(id, item): Observable<any> {
    return this.httpClient
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, { item })
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
