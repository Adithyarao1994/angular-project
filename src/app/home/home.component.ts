import { Component, OnInit } from "@angular/core";
import { BackendServiceService } from "../services/backend-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    public backendService: BackendServiceService
  ) {}

  users: any;
  errorMsg: any;

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.backendService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        this.errorMsg = error;
      }
    );
  }
  filter(userId) {
    this.router.navigate(["/posts", userId]);
  }
  filterAlbum(userId) {
    this.router.navigate(["/albums", userId]);
  }
}
