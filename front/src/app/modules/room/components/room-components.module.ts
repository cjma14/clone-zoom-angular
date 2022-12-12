import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomMenuComponent } from './room-menu/room-menu.component';



@NgModule({
  declarations: [
    RoomMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RoomMenuComponent
  ]
})
export class RoomComponentsModule { }
