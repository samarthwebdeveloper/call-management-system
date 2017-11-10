import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../../../core/services/common/auth.service';

import { UserLoginModel } from '../../../../core/models/userlogin/userlogin.model';

import { AttendanceService } from '../../../../core/services/attendance/attendance.service';
import { AttendanceModel } from '../../../../core/models/attendance/attendance.model';


declare var $: any;

@Component({
  selector: 'app-list-attendance',
  templateUrl: './list-attendance.component.html',
  styleUrls: ['./list-attendance.component.scss']
})
export class ListAttendanceComponent implements OnInit, AfterViewInit{

  public _UserLoginModel = new UserLoginModel();
  _allAttendance: any [] = [];

  constructor(
    private _authService: AuthService,
    private _attendanceService: AttendanceService,
  ) {

   }

  ngOnInit() {
    this._UserLoginModel.id = this._authService.auth_id;  
    this._UserLoginModel.loginID = this._authService.auth_email;
    this._UserLoginModel.loginPassword = this._authService.auth_password;
    this.getAllAttendance();
  }

  getAllAttendance() {
    this._allAttendance = [];
    this._attendanceService
    .GetAll(this._UserLoginModel)
    .subscribe(data => {
      if (data.ResponseType == 0) {
        if(data.JsonData) {
          if(data.JsonData.length !== 0) {
            data.JsonData.forEach(element => {
              this._allAttendance.push(element);
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

  ngAfterViewInit() {
    $('#datatables').DataTable({
        'pagingType': 'full_numbers',
        'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, 'All']],
        responsive: true,
        language: {
        search: '_INPUT_',
        searchPlaceholder: 'Search records',
        }

    });

  }

}
