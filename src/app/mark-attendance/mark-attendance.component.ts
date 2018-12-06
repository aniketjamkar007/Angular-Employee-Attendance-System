import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.css']
})
export class MarkAttendanceComponent implements OnInit {
  employeeList: Employee[];
  startDate: string;
  endDate: string;
  date1: any;
  date2: any;
  timediff: number;
  noOfDays: number;
  leaves: number;
  inputValue: number;
  employeeID: number;
  finalAttendance: number;
  // startDate: string = 'Hi';
  // date = new FormControl(new Date());
  dates: string[] = [];

  constructor(private service: EmployeeService) {
    // const now = Date.now();
  }

  ngOnInit() {
    this.service.getEmployees()
    .subscribe(
      employees => this.employeeList = employees
    );
  }

  onSave() {
    this.service.saveEmployeeList(this.employeeList)
    .subscribe(
      (response) => console.log(response)
    );
  }

  getDate(type: string, id: number, event: MatDatepickerInputEvent<Date>) {
    // this.events.push( `${type}- ${id}- ${event.value}` );
    if (type === 'startDate') {
    this.dates[0] = `${type}- ${id}- ${event.value}`;
    } else if ( type === 'endDate' ) {
    this.dates[1] = `${type}- ${id}- ${event.value}`;
    }
  }

  getLeaves(event: any, empid: number) {
    this.employeeID = empid - 1;
    this.employeeList[this.employeeID].leaves = +event.target.value;
    this.leaves = this.employeeList[this.employeeID].leaves;
    console.log(this.leaves);
  }

  calculateAttendance(empid: number) {
    this.date1 = new Date(this.dates[0].split('-')[2]);
    this.date2 = new Date(this.dates[1].split('-')[2]);
    this.timediff = this.date2 - this.date1;

    empid = empid - 1;
    if ( this.timediff >= 0 && this.employeeID === empid) {
      this.noOfDays = Math.ceil(this.timediff / (1000 * 3600 * 24)) + 1;
      // console.log( this.date2 + '-' + this.date1 + '=' + this.diffDays);
      this.finalAttendance = this.noOfDays - this.leaves;
      this.employeeList[empid].attendance = this.finalAttendance;
      // console.log( this.employeeList[empid].attendance);
      this.employeeList[empid].percentage = (this.finalAttendance / this.noOfDays );
      // console.log(this.employeeList[empid].percentage);
      // this.onSave(empid);
    } else {
      alert('Please select date greater than ' + this.dates[0].split('-')[2] );
    }
  }

  onCheck(event: any, id: number) {
    console.log(event.target.defaultValue);
  }
}
