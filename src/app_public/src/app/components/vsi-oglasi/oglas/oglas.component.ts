import {Component, Input, OnInit} from '@angular/core';
import {Oglas} from "../../../Models/Oglas";

@Component({
  selector: 'app-oglas',
  templateUrl: './oglas.component.html',
  styleUrls: ['./oglas.component.css']
})
export class OglasComponent implements OnInit {
  @Input("oglas") oglas:Oglas;


  constructor() { }

  ngOnInit(): void {
    if(this.oglas){
      console.log(this.oglas)
    }else {
      console.info("nedefiniran")
    }
  }

}
