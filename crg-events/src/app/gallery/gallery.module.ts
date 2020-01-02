import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OverviewComponent, DetailsComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class GalleryModule { }
