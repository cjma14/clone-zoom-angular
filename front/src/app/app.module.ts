import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutModule } from './core/layout/layout.module';
import { appRoutes } from './app.routing';


const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, routerConfig),

    // Layout module of your application
    LayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
