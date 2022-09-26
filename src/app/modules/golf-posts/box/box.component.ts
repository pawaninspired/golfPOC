import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.less']
})
export class BoxComponent implements OnInit {

  @Input() item:any;

  togglecard:any = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCard(){
    this.togglecard = !this.togglecard
  }
}
