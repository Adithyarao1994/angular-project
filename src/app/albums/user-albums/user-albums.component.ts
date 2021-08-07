import { Component, OnInit } from "@angular/core";
import { BackendServiceService } from "../../services/backend-service.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-albums",
  templateUrl: "./user-albums.component.html",
  styleUrls: ["./user-albums.component.css"],
})
export class UserAlbumsComponent implements OnInit {
  id: any;
  albums: any;
  filteredAlbums: any = [];
  constructor(
    private router: Router,
    public backendService: BackendServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    console.log(this.id);
    this.getAlbums(this.id);
  }
  getAlbums(id) {
    this.backendService.getAlbums().subscribe(
      (data) => {
        this.albums = data;
        this.filterAlbums(id);
      },
      (error) => {
        console.log("DBG Error ", error);
      }
    );
  }
  filterAlbums(id) {
    console.log(this.albums);
    for (let i in this.albums) {
      if (id == this.albums[i].userId) {
        console.log(this.albums[i]);
        this.filteredAlbums.push(this.albums[i]);
        console.log(this.filteredAlbums);
      }
    }
  }
}
