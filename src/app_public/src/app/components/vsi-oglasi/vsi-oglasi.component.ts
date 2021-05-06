import { Component, OnInit } from '@angular/core';
import {Oglas} from "../Models/Oglas";

@Component({
  selector: 'app-vsi-oglasi',
  templateUrl: './vsi-oglasi.component.html',
  styleUrls: ['./vsi-oglasi.component.css']
})
export class VsiOglasiComponent implements OnInit {

  oglasi:Oglas[] = []

  constructor() { }

  ngOnInit(): void {

    //todo pridobi vse oglase iz backenda
    this.pridobiVseOglase()

  }

  pridobiVseOglase(){
    //todo implement povezava s servicom, dobimo zaporedje oglasov, vrni oglase
    this.oglasi = [
      {
        "owner": "marica.petkovsek@hotmail.com",
        "name": "Eleganca sprehoda",
        "description": "Ni kaj za dodati. Vašega psa bom sprehajala",
        "price": 32,
        "location": "Zgornja Radgona 10",
        "picture": "nopic"
      },
      {
        "owner": "marica.petkovsek@hotmail.com",
        "name": "Vaš pes in jaz",
        "description": "Če je vašemu psu ime 'Snežinka' ali pa 'Pufko', bom sprehod opravila ZASTONJ!",
        "price": 5,
        "location": "Zgornja Radgona 12 A",
        "picture": "nopic"
      },
      {
        "owner": "joze.fistrovic@hotmail.com",
        "name": "Rad sprehajam pse",
        "description": "Zelo rad sprehajam pse. Vse vrste. V prostem času se družim z psi, ki hodjo mimo mene. Ponavadi jim dam tudi kaj za jest.",
        "price": 10,
        "location": "Slovenska cesta 16",
        "picture": "nopic"
      },
      {
        "owner": "joze.fistrovic@hotmail.com",
        "name": "Prisegam na pse",
        "description": "Obožujem vse vrste psov, še posebej border colie, ki so beli in črni, ker ne racionaliziram barve!",
        "price": 15,
        "location": "Park zvezda 32",
        "picture": "nopic"
      }
    ]
  }

}
