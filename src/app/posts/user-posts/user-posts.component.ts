import { Component, OnInit, Input } from "@angular/core";
import { BackendServiceService } from "../../services/backend-service.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-posts",
  templateUrl: "./user-posts.component.html",
  styleUrls: ["./user-posts.component.css"],
})
export class UserPostsComponent implements OnInit {
  id: any;
  posts: any;
  filteredPosts: any = [];
  edit: boolean = true;

  constructor(
    private router: Router,
    public backendService: BackendServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    console.log(this.id);
    this.getPosts(this.id);
  }
  getPosts(id) {
    this.backendService.getPosts().subscribe(
      (data) => {
        this.posts = data;
        this.filterPosts(id);
      },
      (error) => {
        console.log("DBG Error ", error);
      }
    );
  }
  filterPosts(id) {
    console.log(this.posts);
    for (let i in this.posts) {
      if (id == this.posts[i].userId) {
        console.log(this.posts[i]);
        this.filteredPosts.push(this.posts[i]);
      }
    }
  }
  editPosts(body) {
    console.log(body);
    this.edit = false;
  }
  savePosts(id) {
    this.edit = true;
  }
}
