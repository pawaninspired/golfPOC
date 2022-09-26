import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GolfPostsRoutingModule } from './golf-posts-routing.module';
import { GolfPostsComponent } from './golf-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { BoxComponent } from './box/box.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GolfPostsComponent,
    BoxComponent
  ],
  imports: [
    CommonModule,
    GolfPostsRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class GolfPostsModule { }
