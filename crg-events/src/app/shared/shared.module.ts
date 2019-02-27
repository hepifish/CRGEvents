import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {MatButtonModule, MatMenuModule} from '@angular/material';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule {
}
