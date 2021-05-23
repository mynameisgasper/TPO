import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User, UserPublic} from 'src/app/Models/User';
import {Comment} from 'src/app/Models/Comment'
import { AuthenticationService } from 'src/app/services/authentication.service';
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ogled-profila',
  templateUrl: './ogled-profila.component.html',
  styleUrls: ['./ogled-profila.component.css']
})
export class OgledProfilaComponent implements OnInit {
  user:UserPublic
  id:string
  comment:Comment = new Comment
  public ok: boolean = false;
  deleteid = null
  ocena = null
  currentUser:User
  contactExists:boolean
  constructor(private userService:UserService, private route:ActivatedRoute, private router:Router, private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.pridobiPodatkeUporabnika(this.id)
    this.deleteid = null

    if(this.id === this.authService.vrniTrenutnegaUporabnika().id) {
      this.router.navigate(['profil'])
    }

    this.contactExists = this.checkIfUserHasContact()

  }

  checkIfUserHasContact(){
    this.currentUser = this.authService.vrniTrenutnegaUporabnika()
    for(let c in this.currentUser.contacts){
      console.log(this.currentUser.contacts[c])
      if(this.id.toString() === this.currentUser.contacts[c].toString())
        return false;
    }


    return true
  }


  @ViewChild('inputVsebinaKomentarja') vsebinaKomentarja: ElementRef;

  pridobiPodatkeUporabnika(id:string){
    this.userService.getOne(id).then((result:UserPublic)=> {
      this.user = result
    }).catch(err => {
      alert("Ne najdem uporabnika")
      console.error(err)
    })
  }

  get prijavljenUporabnik(){
    return this.authService.vrniTrenutnegaUporabnika()
  }

  createComment(){
    this.comment.owner = this.authService.vrniTrenutnegaUporabnika().email
    this.comment.content = this.vsebinaKomentarja.nativeElement.value

    this.userService.createComment(this.comment, this.id).then((result:User)=> {
      window.location.reload()
    }).catch(err => {
      alert("Dodajanje komentarja neuspešno!")
      console.error(err)
    })
  }

  initateCommentDelete(comment_id: string) {
    this.deleteid = comment_id
    console.log(this.deleteid)
  }

  deleteComment() {
    console.log(this.id)
    console.log(this.deleteid)

    this.userService.deleteComment(this.id, this.deleteid).then((result:User)=>{
      window.location.reload()
    }).catch(err => {
      alert("Brisanje komentarja neuspešno!")
      console.error(err)
    })
  }

  ogledOglasov(){
    this.router.navigate(['/oglasi-profil/'+ this.id])
  }

  backButton(){
    window.history.back()
  }

  podajOceno() {
    console.log(this.ocena)
    if (this.ocena) {
      this.user.rating = this.ocena
      this.userService.podajOceno(this.id, this.user.rating)
        .then((r) => {
          window.location.reload()
          if (r) {
            alert("uspešno podana ocena")
            this.ok = true
          } else {
            alert("ocena ni uspela")
          }
        })
        .catch(err => {
          alert(err)
        })
    }
  }

  dodajPodHitreKontakte(){
    if(this.currentUser.role > 1){
      this.userService.addContact(this.id).then((result:string)=>{
        window.location.reload()
      }).catch(err => {
        alert("Kontakt ze obstaja.")
        console.error(err)
      })
    } else {
      alert("Ta funkcionalnost je navoljo le premium uporabnikom")
    }

  }

  brisiIzHitrihKontaktov(){
    this.userService.deleteContact(this.id).then((result:User)=>{
      window.location.reload()
    }).catch(err => {
      alert("Kontakt ne obstaja.")
      console.error(err)
    })
  }

}
