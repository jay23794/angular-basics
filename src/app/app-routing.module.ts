import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';

const routes: Routes = [
  {path:'',component:InfiniteScrollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
