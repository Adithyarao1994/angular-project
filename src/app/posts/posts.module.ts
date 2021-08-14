import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostsRoutingModule } from "./posts-routing.module";
import { UserPostsComponent } from "./user-posts/user-posts.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [UserPostsComponent],
  imports: [CommonModule, PostsRoutingModule, FormsModule],
})
export class PostsModule {}
