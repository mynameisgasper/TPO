import { Renderer2, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {Oglas} from "../../Models/Oglas";
import {OglasiService} from "../../services/oglasi.service";

@Component({
  selector: 'app-vsi-oglasi',
  templateUrl: './vsi-oglasi.component.html',
  styleUrls: ['./vsi-oglasi.component.css']
})
export class VsiOglasiComponent implements OnInit {

  oglasi:Oglas[]
  oglas:Oglas = new Oglas

  constructor(private oglasiService:OglasiService, private authService:AuthenticationService, private router:Router, private renderer: Renderer2) { }

  
  @ViewChild('inputNaslovOglasa') naslovOglasa: ElementRef;
  @ViewChild('inputOpisOglasa') opisOglasa: ElementRef;
  @ViewChild('inputCenaOglasa') cenaOglasa: ElementRef;
  @ViewChild('inputSlikaOglasa') slikaOglasa: ElementRef;

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
    this.oglas.owner = this.authService.vrniTrenutnegaUporabnika().email
    this.oglas.name = this.naslovOglasa.nativeElement.value
    this.oglas.description =  this.opisOglasa.nativeElement.value
    this.oglas.location = this.authService.vrniTrenutnegaUporabnika().country
    this.oglas.picture = this.slikaOglasa.nativeElement.value
    this.oglas.price = this.cenaOglasa.nativeElement.value
    

    this.oglasiService.create(this.oglas).then((result:Oglas)=> {
      document.getElementById("buttonCloseAddOglas").click()
      window.location.reload()
      
    }).catch(err => {
      alert("Napaka pri kreaciji oglasa, glej konzolo!")
      console.error(err)
    })

  
    
    
  }

}
