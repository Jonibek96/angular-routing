import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../../model/user.model';
import {UserService} from '../../model/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor(private service: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'agree': new FormControl(false, [Validators.requiredTrue])
    });
  }

  onSubmit() {
    const {email, password} = this.form.value;
    const user = new UserModel(email, password);
    this.service.createUserNew(user).subscribe((user: UserModel[])=>{
      this.router.navigate(['/login'], {
        queryParams: {
          nowCanLogin: true
        }
      });
    })
  }
}
