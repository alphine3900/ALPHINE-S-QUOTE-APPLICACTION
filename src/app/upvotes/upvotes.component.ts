import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upvotes',
  templateUrl: './upvotes.component.html',
  styleUrls: ['./upvotes.component.css']
})
export class UpvotesComponent implements OnInit {
count=0;
  constructor() { }

  ngOnInit(): void {
  }
voted(){
  this.count++
}
}
