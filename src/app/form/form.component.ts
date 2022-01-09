import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  

  quotes: any = [
    {name:"Alvine", gmail:"alvin@gmail.com", quote:"Yes we can", upvote: 0,downvote:0},
    {name:"alvo", gmail:"karimi@gmail.com", quote:"Hardwork pays" , upvote: 0,downvote:0},
    {name:"Crispus", gmail:"cris@gmail.com", quote:"Together we can", upvote: 0,downvote:0},
    {name:"Engineer", gmail:"eng@gmail.com", quote:"Education is key to success", upvote: 0,downvote:0},
  ]
  upvote = 0;
  downvote = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onsubmitData(name: any, email: any, quote: any){
    console.log(name.value, email.value, quote.value)
    this.quotes.push({
      name: name.value,
      email: email.value,
      quote: quote.value,
      upvote: this.upvote,
      downvote: this.downvote
    })
  }
  addUpvote(index: number){
    console.log(this.quotes[index].upvote += 1)
  }
  addDownvote(index: number){
    console.log(this.quotes[index].Downvote += 1)
  }
  deletQuote(index: number){
    this.quotes.splice(index, 1)
  }

}
