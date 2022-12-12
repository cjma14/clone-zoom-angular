import { Route } from "@angular/router";
import { Component } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const HomeRouting: Route[] = [
    {
        path: '',
        component: HomePageComponent
    },
]
