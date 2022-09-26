import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GolfPostsComponent } from './golf-posts.component';

const routes: Routes = [{ path: '', component: GolfPostsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GolfPostsRoutingModule { }
