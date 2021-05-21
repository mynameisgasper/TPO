import {Component, OnInit, Renderer2} from '@angular/core';
import {Oglas} from "../../Models/Oglas";
import {OglasiService} from "../../services/oglasi.service";
import {AuthenticationService} from "../../services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-oglasi-profila',
  templateUrl: './oglasi-profila.component.html',
  styleUrls: ['./oglasi-profila.component.css']
})
export class OglasiProfilaComponent implements OnInit {

  oglasi:Oglas[]
  id: string;

  constructor(private userService:UserService, private oglasiService:OglasiService, private route:ActivatedRoute, private authService:AuthenticationService, private router:Router, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getAllOglasi(this.id)
  }

  getAllOglasi(id: string){
    this.userService.getOglasiProfila(id).then((result:Oglas[])=>{
      this.oglasi = result
      console.log(this.oglasi)
    }).catch(err=>{
      alert("Ne morem dobiti oglasov iz podakotvne baze, preglej konzolo!")
      console.error(err)
    })
  }

  nazajNaProfil(){
    this.router.navigate(['/ogled-profila/' + this.id])
  }

}
