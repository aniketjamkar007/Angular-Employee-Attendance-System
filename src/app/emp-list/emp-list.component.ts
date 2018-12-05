import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  employeeList: Employee[];
  percentage: Array<number>;
  empId: number;
  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.service.getEmployees()
    .subscribe(
      (data) => this.employeeList = data
    );
  }

  getPercentage() {
    this.employeeList.forEach((element) => {
      this.empId = element.empID - 1;
      this.percentage.fill(element.attendance / (element.attendance + element.leaves), this.empId, this.empId);
    });
  }

}
