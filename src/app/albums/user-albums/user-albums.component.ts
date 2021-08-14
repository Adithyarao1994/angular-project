import { Component, OnInit } from "@angular/core";
import { BackendServiceService } from "../../services/backend-service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-albums",
  templateUrl: "./user-albums.component.html",
  styleUrls: ["./user-albums.component.css"],
})
export class UserAlbumsComponent implements OnInit {
  id: any;
  albums: any;
  loggedInUserDetails: any = [];
  filteredAlbums: any = [];
  albumImages: any = [];
  p: number = 1;
  errorMsg: any;

  constructor(
    public backendService: BackendServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    console.log(this.id);
    this.loggedInUserDetails.push(this.backendService.getLoggedInUser(this.id));
    this.getImages(this.id);
  }
  getImages(id) {
    this.backendService.getAlbumImages(this.id).subscribe(
      (data) => {
        this.albumImages = data;
      },
      (error) => {
        this.errorMsg = error;
      }
    );
  }
  clickThumbnail(id) {}
}
