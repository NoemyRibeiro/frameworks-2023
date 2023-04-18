import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  isError = false;
  isAprovado = false;

  user = ""
  pwd = ""

  login(){


    if(this.user == "noemy123" && this.pwd == "12345") {
      this.isAprovado = true 
      this.isError = false 
    } else {

      this.isError = true;
      this.isAprovado = false;
    }


    console.log("User = " + this.user + "Password = " + this.pwd)


    }
  }

  
