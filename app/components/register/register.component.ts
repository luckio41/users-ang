import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './user.service';

@Component({
    selector: 'register',
    templateUrl: './app/components/register/register.component.html',
    providers: [ FormBuilder, UserService ]
})

export class RegisterComponent {

    userGroup: FormGroup;

    constructor(fb: FormBuilder, private userService: UserService) {
        this.userGroup = fb.group({
            nombre: ['', Validators.required],
            pass: ['', Validators.required],
            rpass: ['', Validators.required]
        });
    }

    registrarForm(formulario) {
        this.userService.registrar({
            Email: this.userGroup.value.nombre,
            Password: this.userGroup.value.pass,
            ConfirmPassword: this.userGroup.value.rpass
        });
    }
}