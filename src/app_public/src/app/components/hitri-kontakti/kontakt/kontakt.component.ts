import {Component, Input, OnInit} from '@angular/core';
import {Oglas} from "../../../Models/Oglas";
import {UserService} from "../../../services/user.service";
import {User, UserPublic} from "../../../Models/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {
  @Input("contact") contact:string;
  constructor(private userService: UserService, private router: Router) { }

  ime:string
  priimek:string
  user:UserPublic

  ngOnInit(): void {
    this.pridobiPodatkeUporabnika(this.contact)




  }

  pridobiPodatkeUporabnika(id:string){
    this.userService.getOne(id).then((result:UserPublic)=> {
      this.user = result
      this.ime = result.name
      this.priimek = result.surname
    }).catch(err => {
      alert("Ne najdem uporabnika")
      console.error(err)
    })
  }

  linkToProfile(){
    this.router.navigate(['/ogled-profila/' + this.contact])
  }

}
