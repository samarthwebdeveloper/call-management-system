import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/common/auth.service';

import { UserLoginModel } from '../../../../core/models/userlogin/userlogin.model';

import { AttendanceService } from '../../../../core/services/attendance/attendance.service';
import { AttendanceModel } from '../../../../core/models/attendance/attendance.model';

@Component({
  selector: 'app-manage-attendance',
  templateUrl: './manage-attendance.component.html',
  styleUrls: ['./manage-attendance.component.scss']
})
export class ManageAttendanceComponent implements OnInit {

  public _UserLoginModel = new UserLoginModel();

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
        console.log(data);
      })
  }
}
