import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/common/auth.service';

import { UserLoginModel } from '../../../../core/models/userlogin/userlogin.model';

import { AttendanceService } from '../../../../core/services/attendance/attendance.service';
import { AttendanceModel } from '../../../../core/models/attendance/attendance.model';

declare var $: any;

@Component({
  selector: 'app-manage-attendance',
  templateUrl: './manage-attendance.component.html',
  styleUrls: ['./manage-attendance.component.scss']
})
export class ManageAttendanceComponent implements OnInit {

  public _UserLoginModel = new UserLoginModel();
  public _attendanceModel = new AttendanceModel();

  checkInVisibility: boolean = false;
  checkOutVisibility: boolean = false;
  
  constructor(
    private _authService: AuthService,
    private _attendanceService: AttendanceService,
  ) { }

  ngOnInit() {
      this._UserLoginModel.id = this._authService.auth_id;  
      this._UserLoginModel.loginID = this._authService.auth_email;
      this._UserLoginModel.loginPassword = this._authService.auth_password;
      this.checkAttendance();
  }

  checkAttendance(){
    this._attendanceService
      .GetTodaysPunch(this._UserLoginModel)
      .subscribe(data => {
        if (data.ResponseType == 0) {
          if(data.JsonData == null) {
            this.checkInVisibility = true;
            this.checkOutVisibility = false;
          } else {
            this.checkInVisibility = false;
            this.checkOutVisibility = true;
            this._attendanceModel = data.JsonData;
          }
        } else {
          this.showNotification('top', 'right', 'Oops ! Something went wrong', 'danger'); 
        }
      })
  }

  Save(status: any) {
    if(status == 'checkin') {
      this._attendanceModel.employeeID = this._UserLoginModel.id;
      this._attendanceModel.punchInTime = new Date();
    } else {
      this._attendanceModel.punchOutTime = new Date();
    }

    this._attendanceService
      .Save(this._attendanceModel)
      .subscribe(data => {
        if(data.ResponseType == 0) {
          if(status == 'checkin') {
            this.showNotification('top', 'right', 'Thank you ! You are check-in Successfully', 'success');
          } else {
            this.showNotification('top', 'right', 'Thank you ! You are check-out Successfully', 'success');
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
