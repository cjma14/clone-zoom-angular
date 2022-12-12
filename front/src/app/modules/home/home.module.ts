import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRouting } from './home.routing';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(HomeRouting),
    ],
    exports: [
        HomePageComponent
    ]
})

export class HomeModule { }
