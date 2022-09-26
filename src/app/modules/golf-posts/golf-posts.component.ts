import { Component, OnInit } from '@angular/core';
import {PostlistService} from '../../services/postlist.service'
import { Observable, of } from 'rxjs';
import { Category, PostLength, Payload} from './../../models/postData.model'


@Component({
  selector: 'app-golf-posts',
  templateUrl: './golf-posts.component.html',
  styleUrls: ['./golf-posts.component.less']
})
export class GolfPostsComponent implements OnInit {
  postList : any;  
  clickcounter : any = 0;
  selectedCatrgory:string ="golf"
  postLength:number = 10;
  categories: Category[] = [
    {value: 'golf', viewValue: 'Golf'},
    {value: 'football', viewValue: 'Footbal'},
    {value: 'cricket', viewValue: 'Cricket'},
    {value: 'badminton', viewValue: 'Badminton'},
  ];
  postlengths: PostLength[] = [
    {value: 5, viewValue: '5'},
    {value: 10, viewValue: '10'},
    {value: 20, viewValue: '20'}
  ];
  payload:Payload = {
    caregory:"golf",
    FLitemName:"",
    action:"",
    noOfPost:0
  }
  constructor(
   private postlistService: PostlistService,
  ) { }
  ngOnInit(): void {
    this.getPosts(this.selectedCatrgory);
  }
  paginate(navtype:string):void{
    if(navtype === "next"){  
      this.clickcounter ++ 
      this.payload.FLitemName = this.postList[this.postList.length -1].data.name
      this.getPosts(this.selectedCatrgory, this.payload.FLitemName, 'after', this.postLength)
    }
    else{
      this.clickcounter --
      this.payload.FLitemName = this.postList[0].data.name
      this.getPosts(this.selectedCatrgory, this.payload.FLitemName, 'before', this.postLength);
    }
  }
  getPosts(category:string = "", FLitemName:string="",action:string="", postlength:number = 10): void {
    this.postlistService.getList(category,FLitemName,action,postlength).subscribe(posts => {this.postList = posts});
  }
  updateOpt(){
    console.log(this.selectedCatrgory);
    this.getPosts(this.selectedCatrgory, "", "", this.postLength)
    this.clickcounter = 0
  }
}
