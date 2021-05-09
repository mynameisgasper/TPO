import { Component, Input, OnInit } from '@angular/core';
import {User, UserRegister} from 'src/app/Models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-urejanje-profila',
  templateUrl: './urejanje-profila.component.html',
  styleUrls: ['./urejanje-profila.component.css']
})
export class UrejanjeProfilaComponent implements OnInit {

  public user:User
  public userData:User
  public response: string = "";
  public resp: string = "";
  public ok: boolean = false;
  public password: string

  constructor(private authService:AuthenticationService, private userService:UserService) { }

  ngOnInit(): void {
    if(this.authService.jePrijavljen()) {
      this.pridobiPodatkeUporabnika()
    }
  }

  pridobiPodatkeUporabnika(){
    this.user = this.authService.vrniTrenutnegaUporabnika()
    this.userData = this.user
    console.log("User:" + this.user)
  }

  public editUser(): void {
    this.userService.editUser(this.user.id, this.user)
      .then((user: User) => {
        console.log("User posodobljen", user);
      })
  }

  onClick() {
    if (this.fieldsCheck()) {
      this.editUser()
    }
  }

  public updatePass() {
    let passLenCheck = new RegExp("^.{8,}$");

    let newPass = (document.getElementById('passwordEdit') as HTMLInputElement).value;
    let newPassTwo = (document.getElementById('reppasswordEdit') as HTMLInputElement).value;

    let passLenTest = passLenCheck.test(newPass);
    let newPassTest = false;
    if (newPass === newPassTwo) {
      this.password = newPass
      newPassTest = true;
    }
    if (!passLenTest) {
      this.resp = "\nGeslo mora vsebovati vsaj 8 znakov.\n";
    }
    else if (!newPassTest) {
      this.resp = "\nGesli se ne ujemata.\n";
    } else {
      this.resp = "";
    }
    if (passLenTest && newPassTest) {
      this.authService.updatePassword(this.password)
        .then((r) => {
          if (r) {
            alert("uspešno spremenjen password")
            this.ok = true
          } else {
            alert("failed to change password")
          }
        })
        .catch(err => {
          alert(err)
        })
    }
  }

  fieldsCheck() {
    //regex + check
    let userNameCheck = new RegExp("^[a-z0-9A-ZčćžđšČĆŽĐŠ ]+$");
    let emailCheck = new RegExp("^[^@\\s]+@[^@\\s\.]+\\.[^@\.\\s]+$");
    let phoneCheck = new RegExp("^[0-9]+$");

    let userNameTest = userNameCheck.test(this.userData.name);
    let userSurnameTest = userNameCheck.test(this.userData.surname);
    let emailTest = emailCheck.test(this.userData.email);
    let phoneTest = phoneCheck.test(this.userData.phone);

    //response
    if (!userNameTest) {
      this.response += "\nIme lahko vsebuje le alfanumerične znake in presledke.\n" + this.userData.name;
    }
    if (!userSurnameTest) {
      this.response += "\nPriimek lahko vsebuje le alfanumerične znake in presledke.\n" + this.userData.surname;
    }
    if (!emailTest) {
      this.response += "\nProsim vnesi pravilen email naslov.\n";
    }
    if (!phoneTest) {
      this.response += "\nProsim vnesi pravilno telefonsko številko.\n";
    }
    if (userNameTest && emailTest && userSurnameTest && phoneTest) {
      console.log(this.userData)
      return true;
    } else {
      return false;
    }
  }

  clearModal() {
    (document.getElementById('passwordEdit') as HTMLInputElement).value = "";
    (document.getElementById('reppasswordEdit') as HTMLInputElement).value = "";
  }
}
