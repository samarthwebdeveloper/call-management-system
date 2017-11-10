import { Component, OnInit, AfterViewInit } from '@angular/core';

import { AuthService } from '../../../../core/services/common/auth.service';
import { UserLoginModel } from '../../../../core/models/userlogin/userlogin.model';

import { LeaveService } from '../../../../core/services/leave/leave.service';
import { LeaveModel } from '../../../../core/models/leave/leave.model';

declare var $: any;

@Component({
  selector: 'app-list-leave',
  templateUrl: './list-leave.component.html',
  styleUrls: ['./list-leave.component.scss']
})
export class ListLeaveComponent implements OnInit {

  public _UserLoginModel = new UserLoginModel();
  _allLeaves: any [] = [];

  constructor(
    private _authService: AuthService,
    private _leaveService: LeaveService,
  ) {

   }

  ngOnInit() {

    this._UserLoginModel.id = this._authService.auth_id;  
    this._UserLoginModel.loginID = this._authService.auth_email;
    this._UserLoginModel.loginPassword = this._authService.auth_password;
    this.getAllLeaves();

  }

  getAllLeaves() {
    this._allLeaves = [];
    this._leaveService
    .GetAll(this._UserLoginModel)
    .subscribe(data => {
      if (data.ResponseType == 0) {
        if(data.JsonData) {
          if(data.JsonData.length !== 0) {
            data.JsonData.forEach(element => {
              this._allLeaves.push(element);
            });
          }
        }
      } else {
        this.showNotification('top', 'right', 'Oops ! Something went wrong', 'danger'); 
      }
    })
  }

  showNotification(from, align, msg, type) {
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
