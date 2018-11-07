import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../model/auth.service';
import {UserService} from '../../model/user.service';
import {UserModel} from '../../model/user.model';
import {MessageModel} from '../../model/message.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: MessageModel;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private auth: AuthService,
              private service: UserService) {}

  ngOnInit() {
    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['nowCanLogin']) {
          alert('error')
        } else if (params['accessDenied']) {
          alert('no error')
        }
      });
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required]),
      'password': new FormControl (null, [ Validators.required])
    });
  }

 showMessage(message: any) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  onSubmit() {
    const forms = this.form.value;
    this.service.getUserByEmail(forms.email).subscribe((user: UserModel) => {
      if (user) {
        if (user.email === forms.email && user.password === forms.password) {
          window.localStorage.setItem('user', JSON.stringify(user));
          // this.auth.login();
          this.router.navigate(['/system', 'home'])
        } else {
          alert('Password is not correct');
         // this.showMessage({
         //   text: 'Password is not correct',
         //   type: 'danger'
         // })
        }
      } else {
        alert('There is no such user.');
        // this.showMessage({
        //   text: 'There is no such user.',
        //   type: 'danger'
        // })
      }
    });
  }
}
