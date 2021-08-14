import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { LightboxModule } from "ngx-lightbox";
import { AlbumsRoutingModule } from "./albums-routing.module";
import { UserAlbumsComponent } from "./user-albums/user-albums.component";

@NgModule({
  declarations: [UserAlbumsComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    NgxPaginationModule,
    LightboxModule,
  ],
})
export class AlbumsModule {}
