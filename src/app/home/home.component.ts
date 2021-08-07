import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { BackendServiceService } from "../services/backend-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  @Input() text: string;
  @Output() userDetails = new EventEmitter();
  constructor(
    private router: Router,
    public backendService: BackendServiceService
  ) {}

  users: any;

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.backendService.getUsers().subscribe(
      (data) => {
        console.log("DBG: Respone", data);
        this.users = data;
      },
      (error) => {
        console.log("DBG Error ", error);
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
