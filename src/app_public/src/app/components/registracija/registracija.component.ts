import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserRegister} from 'src/app/Models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(private authService:AuthenticationService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('surnameInput') surnameInput: ElementRef;
  @ViewChild('phoneInput') phoneInput: ElementRef;
  @ViewChild('addressInput') addressInput: ElementRef;
  @ViewChild('countryInput') countryInput: ElementRef;
  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('passInput') passInput: ElementRef;
  @ViewChild('passInput2') passInput2: ElementRef;

  public response: string = "";

  name: string
  surname: string
  email: string
  phone: string
  address: string
  country: string
  password: string
  passwordCheck: string
  role: number = 0

  public setRole(i:number): void {
    this.role = i;
  }

  public posiljanjePodatkov(): void {
    console.log("posiljanje podatkov")
    this.response = "";
    this.name = this.nameInput.nativeElement.value
    this.surname = this.surnameInput.nativeElement.value
    this.email = this.emailInput.nativeElement.value
    this.phone = this.phoneInput.nativeElement.value
    this.address = this.addressInput.nativeElement.value
    this.country = this.countryInput.nativeElement.value
    this.password = this.passInput.nativeElement.value
    this.passwordCheck = this.passInput2.nativeElement.value
    if (
      !this.name ||
      !this.surname ||
      !this.email ||
      !this.phone ||
      !this.address ||
      !this.country ||
      !this.password
    ) {
      this.response = "Zahtevani so vsi podatki.";
    }
    //regex + check
    let userNameCheck = new RegExp("^[a-z0-9A-ZčćžđšČĆŽĐŠ ]+$");
    let emailCheck = new RegExp("^[^@\\s]+@[^@\\s\.]+\\.[^@\.\\s]+$");
    let passLenCheck = new RegExp("^.{8,}$");
    let phoneCheck = new RegExp("^[0-9]+$");

    let userNameTest = userNameCheck.test(this.name);
    let userSurnameTest = userNameCheck.test(this.surname);
    let emailTest = emailCheck.test(this.email);
    let passLenTest = passLenCheck.test(this.password);
    let phoneTest = phoneCheck.test(this.phone);

    //check if passwords match
    let newPassTest = true;
    if (this.passwordCheck) {
      newPassTest = false;
      if (this.passwordCheck === this.password) {
        newPassTest = true;
      }
    }
    //response
    if (!userNameTest) {
      this.response += "\nIme lahko vsebuje le alfanumerične znake in presledke.\n";
    }
    if (!userSurnameTest) {
      this.response += "\nPriimek lahko vsebuje le alfanumerične znake in presledke.\n";
    }
    if (!emailTest) {
      this.response += "\nProsim vnesi pravilen email naslov.\n";
    }
    if (!passLenTest) {
      this.response += "\nGeslo mora vsebovati vsaj 8 znakov.\n";
    }
    if (!newPassTest) {
      this.response += "\nGesli se ne ujemata.\n";
    }
    if (!phoneTest) {
      this.response += "\nProsim vnesi pravilno telefonsko številko.\n";
    }
    if (userNameTest && emailTest && userSurnameTest && passLenTest && newPassTest && phoneTest) {
      let user:UserRegister = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone: this.phone,
        address: this.address,
        country: this.country,
        password: this.password,
        role: this.role
      }
      console.log(user)
      this.izvediRegistracijo(user);
    }
  }

  private izvediRegistracijo(user:UserRegister): void {
    this.authService
      .register(user)
      .then(() => this.router.navigateByUrl(""))
      .catch(sporocilo => this.response = sporocilo);
  }

  onClickRegister() {
    console.log("clicked register")
    this.posiljanjePodatkov()
  }

}
