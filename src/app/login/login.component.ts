import { Component} from '@angular/core';
import { reitinValvoja } from '../reitinvalvoja.guard';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(public router: Router, private authService: AuthServiceService) {}
  
  onLogin(email: string, password: string) {
    this.authService.login(email, password)
  }

  cancelBtnClick(){
    this.router.navigate(['feedback']);
  }

}
