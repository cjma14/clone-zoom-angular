import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoomRouting } from './room.routing';
import { RoomPageComponent } from '../room/pages/room-page/room-page.component';
import { RoomComponentsModule } from './components/room-components.module';

@NgModule({
    declarations: [
        RoomPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(RoomRouting),
        RoomComponentsModule
    ],
    exports: [
    ]
})

export class RoomModule { }
