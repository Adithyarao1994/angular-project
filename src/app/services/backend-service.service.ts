import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BackendServiceService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users");
  }
  getPosts() {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts/");
  }
  getAlbums() {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/albums/");
  }
}
