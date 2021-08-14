import { Component, OnInit } from "@angular/core";
import { BackendServiceService } from "../../services/backend-service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-posts",
  templateUrl: "./user-posts.component.html",
  styleUrls: ["./user-posts.component.css"],
})
export class UserPostsComponent implements OnInit {
  id: any;
  posts: any;
  loggedInUserDetails: any = [];
  edit: boolean = true;
  errorMsg: any;

  constructor(
    public backendService: BackendServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.loggedInUserDetails.push(this.backendService.getLoggedInUser(this.id));
    this.getPosts(this.id);
  }
  getPosts(id) {
    this.backendService.getPosts(id).subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        this.errorMsg = error;
      }
    );
  }
  editButton() {
    this.edit = false;
  }
  saveButton(item) {
    this.edit = true;
    let id = item.id;
    this.backendService.editPosts(id, item).subscribe(
      (data) => {
        item.body = data["item"].body;
      },
      (error) => {
        this.errorMsg = error;
      }
    );
  }
}
