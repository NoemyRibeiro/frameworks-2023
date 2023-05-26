import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private router:Router){}
  isError = false;
  isCorrect = false

  user = ""
  pwd = ""

  login(){
    if(this.user == "noemy015" && this.pwd == "mimi2005"){
      this.isCorrect = true
      this.isError = false;
      this.router.navigate(['/dashboard']);
    }
    else{
      this.isError = true;
      this.isCorrect = false;

    }

    console.log("User = " + this.user + "Password = " + this.pwd)
  }
}
