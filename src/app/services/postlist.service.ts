import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import {PostData} from './../models/postData.model'

@Injectable({
  providedIn: 'root'
})
export class PostlistService {
  constructor(private http: HttpClient) { }

  getList(...params:any) : Observable<any> {
    return this.http.get<PostData>(`https://www.reddit.com/r/${params[0]}.json?limit=${params[3]-1}&${params[2]}=${params[1]}`).pipe(map(responseData => { //Name
       const {data:{children:theList}} = responseData;
       for(const item of theList) {
        item.data.daysAgo = this.getDays(item.data.created) //Converting from date to days and adding a new key "daysAgo"
      }
       return theList
    }))
  }
  getDays(postedOn:number) {
    const day = 24 * 60 * 60 * 1000; 
    const postdate = new Date(postedOn * 1000).getTime()
    const today  = new Date().getTime() 
    const diffDays = Math.round(Math.abs((postdate - today) / day));
    return diffDays
  }
}
