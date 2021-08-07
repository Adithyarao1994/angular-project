import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserPostsComponent } from "./user-posts/user-posts.component";

const routes: Routes = [
  {
    path: "",
    component: UserPostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
