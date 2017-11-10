import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { DateAdapter } from '@angular/material';

import { AuthService } from '../../../../core/services/common/auth.service';
import { UserLoginModel } from '../../../../core/models/userlogin/userlogin.model';

import { LeaveModel } from './../../../../core/models/leave/leave.model';
import { LeaveService  }  from '../../../../core/services/leave/leave.service';

declare const $: any;

@Component({
  selector: 'app-manage-leave',
  templateUrl: './manage-leave.component.html',
  styleUrls: ['./manage-leave.component.scss']
})
export class ManageLeaveComponent implements OnInit {

  form: FormGroup;
  _leaveModel = new LeaveModel();
  isSubmitted: boolean;

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _authService: AuthService,
    private _leaveService: LeaveService,
  ) { 
      this.form = fb.group({
        'leaveFrom': [this._leaveModel.leaveFrom, Validators.required],
        'leaveTo': [this._leaveModel.leaveTo, Validators.required],
        'narration': [this._leaveModel.narration, Validators.required],
        'employeeID': []
      });
   }

  ngOnInit() {
    this._leaveModel.employeeID = this._authService.auth_id;
  }

  onSubmit(value: any, isValid: boolean) {  
    this.isSubmitted = true;
    if (!isValid) {
      this.showNotification('top', 'right', 'Validation failed!!!', 'danger');
      return false;
    } else {
      
      this._leaveService
        .Save(this._leaveModel)
        .subscribe(data => {
          console.log(data);
          if(data.ResponseType == 0) {
            this.showNotification('top', 'right', 'Leave has been added successfully', 'success');
            this._router.navigate(['/pages/leave/lists' ]);
          } else {
            this.showNotification('top', 'right', 'Oops ! Something went wrong', 'danger');
          }
        })
    }

  }

  showNotification(from: any, align: any, msg: any, type: any) {
    $.notify({
      icon: "notifications",
      message: msg
    }, {
        type: type,
        timer: 3000,
        placement: {
          from: from,
          align: align
        }
      });
  }

}
