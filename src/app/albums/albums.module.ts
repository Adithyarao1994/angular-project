import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { UserAlbumsComponent } from './user-albums/user-albums.component';

@NgModule({
  declarations: [UserAlbumsComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule
  ]
})
export class AlbumsModule { }
