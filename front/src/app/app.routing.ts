import { Route } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    { path: '', pathMatch: 'full', redirectTo: 'home'},

    {
        path       : '',
        component  : LayoutComponent,
        children   : [
            {
                path: 'home', 
                loadChildren: () => import('../app/modules/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'room', 
                loadChildren: () => import('../app/modules/room/room.module').then(m => m.RoomModule)
            }
        ]
    }
];
