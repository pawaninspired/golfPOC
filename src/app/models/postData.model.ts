export interface PostData {
    data:{
        children:Post[]
    },
    kind:string;
}

interface Post {
    data:{
    num_comments:number,
    score:number,
    title:string,
    selftext:string,
    created:number,
    daysAgo:number,
    author:string,
    name:string}
}

export interface Category {
    value: string;
    viewValue: string;
}
export interface PostLength {
    value: number;
    viewValue: string;
}


export interface Payload {
    caregory:string,
    FLitemName:string,
    action:string,
    noOfPost:number
  }