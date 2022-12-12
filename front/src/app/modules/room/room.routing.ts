import { Route } from "@angular/router";
import { Component } from '@angular/core';
import { RoomPageComponent } from './pages/room-page/room-page.component';

export const RoomRouting: Route[] = [
    {
        path: ':id',
        component: RoomPageComponent
    }
]
