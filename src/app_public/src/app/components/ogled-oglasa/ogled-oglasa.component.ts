import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
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

  constructor(private oglasiService:OglasiService, private route:ActivatedRoute, private router:Router, private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getOneOglas(this.id)
  }

  @ViewChild('inputNaslovOglasa') naslovOglasa: ElementRef;
  @ViewChild('inputOpisOglasa') opisOglasa: ElementRef;
  @ViewChild('inputCenaOglasa') cenaOglasa: ElementRef;
  @ViewChild('inputSlikaOglasa') slikaOglasa: ElementRef;

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

  izbrisiOglas(){
    console.log(this.id)
    this.oglasiService.deleteOne(this.id).then((result:Oglas)=> {
      this.router.navigate(["oglasi"])
      alert("Oglas izbrisan!")
    }).catch(err => {
      alert("Brisanje neuspešno!")
      console.error(err)
    })
  }

  urediOglas(){
    this.oglas.owner = this.authService.vrniTrenutnegaUporabnika().id
    this.oglas.name = this.naslovOglasa.nativeElement.value
    this.oglas.description =  this.opisOglasa.nativeElement.value
    this.oglas.location = this.authService.vrniTrenutnegaUporabnika().country
    this.oglas.picture = this.slikaOglasa.nativeElement.value
    this.oglas.price = this.cenaOglasa.nativeElement.value

    this.oglasiService.update(this.oglas, this.id).then((result:Oglas)=> {
      document.getElementById("buttonCloseUrediOglas").click()
      window.location.reload()

    }).catch(err => {
      alert("Napaka pri urejanju oglasa, glej konzolo!")
      console.error(err)
    })
  }

  openProfile() {
    console.log(this.oglas.owner)
    this.router.navigate(["ogled-profila/"+this.oglas.owner])
  }

  odpriProfilLastnikaOglasa(){
    this.oglas.owner
  }



}




