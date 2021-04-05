import { Routes } from '@angular/router';
import { MainComponent } from '../areas/main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'huindex', component: MainComponent, },
];
