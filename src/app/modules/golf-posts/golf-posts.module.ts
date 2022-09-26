import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GolfPostsRoutingModule } from './golf-posts-routing.module';
import { GolfPostsComponent } from './golf-posts.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { BoxComponent } from './box/box.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    GolfPostsComponent,
    BoxComponent
  ],
  imports: [
    CommonModule,
    GolfPostsRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule
  ]
})
export class GolfPostsModule { }
