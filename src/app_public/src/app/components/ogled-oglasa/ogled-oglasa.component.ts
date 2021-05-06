import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Oglas} from "../../Models/Oglas"
import {OglasiService} from "../../services/oglasi.service";


@Component({
  selector: 'app-ogled-oglasa',
  templateUrl: './ogled-oglasa.component.html',
  styleUrls: ['./ogled-oglasa.component.css']
})
export class OgledOglasaComponent implements OnInit {
  oglas: Oglas
  id: string;

  constructor(private oglasiService:OglasiService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getOneOglas(this.id)
  }

  getOneOglas(id: string) {
    this.oglasiService.getOne(this.id).then((result:Oglas)=>{
      this.oglas = result
      console.log(this.oglas)
    }).catch(err=>{
      alert("Ne najdem oglasa, preglej konzolo!")
      console.error(err)
    })
  }

  returnToOglasi(){
    this.router.navigate(["oglasi"])
  }

 

}

  


