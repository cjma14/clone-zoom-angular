import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './pages/empty/empty.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { LayoutComponentsModule } from './components/layout-components.module';


@NgModule({
  declarations: [
    EmptyComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutComponentsModule
  ]
})
export class LayoutModule { }
