import { Component, Input, OnInit } from '@angular/core';
import { Comment } from "../../Models/Comment";

@Component({
  selector: 'app-profil-uporabnika',
  templateUrl: './profil-uporabnika.component.html',
  styleUrls: ['./profil-uporabnika.component.css']
})
export class ProfilUporabnikaComponent implements OnInit {
  
  komentarji:Comment[] = []

  constructor() { }

  ngOnInit(): void {
    //todo pridobi vse oglase iz backenda
    this.pridobiVseKomentarje()
  }

  pridobiVseKomentarje(){
    //TODO
  }

}
