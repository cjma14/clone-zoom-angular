import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomMenuComponent } from './room-menu/room-menu.component';
import { RoomVideoPlayerComponent } from './room-video-player/room-video-player.component';



@NgModule({
  declarations: [
    RoomMenuComponent,
    RoomVideoPlayerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RoomMenuComponent,
    RoomVideoPlayerComponent
  ]
})
export class RoomComponentsModule { }
