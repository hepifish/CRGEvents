import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [OverviewComponent, DetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ]
})
export class GalleryModule { }
