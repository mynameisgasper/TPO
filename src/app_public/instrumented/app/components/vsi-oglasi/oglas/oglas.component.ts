import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Oglas} from "../../../Models/Oglas";

@Component({
  selector: 'app-oglas',
  templateUrl: './oglas.component.html',
  styleUrls: ['./oglas.component.css']
})
export class OglasComponent implements OnInit {
  @Input("oglas") oglas:Oglas;

  id: string;

  constructor(private router:Router) { }

  ngOnInit(): void {

    if(this.oglas){
      console.log(this.oglas)
    }else {
      console.info("nedefiniran")
    }
  }

  openOglas() {
    console.log(this.oglas._id)

    this.router.navigate(["ogled-oglasa/"+this.oglas._id])

  }

}
