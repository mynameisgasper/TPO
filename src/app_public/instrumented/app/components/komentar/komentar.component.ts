import { Component, Input, OnInit } from '@angular/core';
import { Comment } from "../../Models/Comment";

@Component({
  selector: 'app-komentar',
  templateUrl: './komentar.component.html',
  styleUrls: ['./komentar.component.css']
})
export class KomentarComponent implements OnInit {
  @Input("komentar") komentar:Comment;

  constructor() { }

  ngOnInit(): void {
    if(this.komentar){
      console.log(this.komentar)
    }else {
      console.info("nedefiniran")
    }
  }

}
