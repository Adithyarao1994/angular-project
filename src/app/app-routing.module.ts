import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
//import { AuthRoutingModule } from "./auth/auth-routing.module";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "posts/:id",
    loadChildren: "./posts/posts.module#PostsModule",
  },
  {
    path: "albums/:id",
    loadChildren: "./albums/albums.module#AlbumsModule",
  },
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
