import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserAlbumsComponent } from "./user-albums/user-albums.component";

const routes: Routes = [
  {
    path: "",
    component: UserAlbumsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumsRoutingModule {}
