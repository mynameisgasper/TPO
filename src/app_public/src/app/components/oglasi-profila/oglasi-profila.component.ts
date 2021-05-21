import {Component, OnInit, Renderer2} from '@angular/core';
import {Oglas} from "../../Models/Oglas";
import {OglasiService} from "../../services/oglasi.service";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-oglasi-profila',
  templateUrl: './oglasi-profila.component.html',
  styleUrls: ['./oglasi-profila.component.css']
})
export class OglasiProfilaComponent implements OnInit {

  oglasi:Oglas[]


  constructor(private oglasiService:OglasiService, private authService:AuthenticationService, private router:Router, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.getAllOglasi()
  }

  getAllOglasi(){
    this.oglasiService.getAll().then((result:Oglas[])=>{
      this.oglasi = result
      //console.log(this.oglasi)
    }).catch(err=>{
      alert("Ne morem dobiti oglasov iz podakotvne baze, preglej konzolo!")
      console.error(err)
    })
  }

}
