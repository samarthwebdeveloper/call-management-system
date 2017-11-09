import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserLoginModel } from './../../core/models/userlogin/userlogin.model';
import { UserloginService } from './../../core/services/userlogin/userlogin.service';
import { AuthService } from './../../core/services/common/auth.service';

declare var $: any;

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    test: Date = new Date();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;

    public form: FormGroup;
    public loginID: AbstractControl;
    public loginPassword: AbstractControl;
    public submitted: boolean = false;
    public _UserLoginModel = new UserLoginModel();
    public auth_error;
    public token;
    public Invalid = false;
    public redirToDashboard = false;

    constructor(
        private element: ElementRef,
        fb: FormBuilder, 
        private userloginService: UserloginService,
        private authService: AuthService,
        private _router: Router
    ) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;

        this.authService.logout();
        
        this.form = fb.group({
          'loginID': [this._UserLoginModel.loginID, Validators.compose([Validators.required, Validators.minLength(4)])],
          'loginPassword': [this._UserLoginModel.loginPassword, Validators.compose([Validators.required, Validators.minLength(4)])],
        });
    
        this.loginID = this.form.controls['loginID'];
        this.loginPassword = this.form.controls['loginPassword'];
    }

    ngOnInit() {
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    }
    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function() {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }

    onSubmit(values: Object): void {
        this.submitted = true;
        if (this.form.valid) {
            // let postData = {
            //     loginID: this._UserLoginModel.loginID,
            //     loginPassword: this._UserLoginModel.loginPassword
            // }
            let postData = {
                email: this._UserLoginModel.loginID,
                password: this._UserLoginModel.loginPassword
            }
            console.log(postData);
            this.userloginService
                .login(postData)
                .subscribe(data =>{
                    if (data) {
                        console.log(data);
                        // this.Invalid = false;
                        // data.user.password = '';
                        // this.token = {
                        //     username: data.username,
                        //     user: data.user,
                        //     token: data.token,
                        //     role: data.user.role,
                        //     roletype: data.user.role.roletype,
                        //     _id: data.user._id,
                        // };
                        // this.authService.login(this.token);
                        // this.form.reset();
                        // this.submitted = false;
                        // this._router.navigate(['/pages/admins/admin-dashboard']);
                    }
            });
        }
    }
}
