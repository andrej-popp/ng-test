import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { TopBarComponent } from './top-bar/top-bar.component';



@NgModule({
  declarations: [
    MainComponent, TopBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
