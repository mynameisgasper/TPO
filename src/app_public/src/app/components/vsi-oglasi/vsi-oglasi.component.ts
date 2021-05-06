import { Component, OnInit } from '@angular/core';
import {Oglas} from "../../Models/Oglas";
import {OglasiService} from "../../services/oglasi.service";

@Component({
  selector: 'app-vsi-oglasi',
  templateUrl: './vsi-oglasi.component.html',
  styleUrls: ['./vsi-oglasi.component.css']
})
export class VsiOglasiComponent implements OnInit {

  oglasi:Oglas[]

  constructor(private oglasiService:OglasiService) { }

  ngOnInit(): void {
    this.getAllOglasi()
  }

  getAllOglasi(){
    this.oglasiService.getAll().then((result:Oglas[])=>{
      this.oglasi = result
      console.log(this.oglasi)
    }).catch(err=>{
      alert("Ne morem dobiti oglasov iz podakotvne baze, preglej konzolo!")
      console.error(err)
    })
  }

  createOglas() {
    console.log("aaaa")
  }

}
