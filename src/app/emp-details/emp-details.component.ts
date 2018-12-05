import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit, OnDestroy {
  employee: Employee;
  employeeList: Employee[];
  routerSubscription: Subscription;
  startDate: string;
  showPercentage: any;
  public pieChartLabels: string[] = ['Present', 'Absent'];
  public pieChartData: number[] = [];
  public pieChartType = 'pie';
  // public pieChartColors: string[] = [ 'rgba(255, 99, 132, 0.2)' , 'rgba(255, 99, 132, 0.2)'];

  constructor(private activatedRoute: ActivatedRoute,
              private service: EmployeeService,
              private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(params => {
      const id = +params['id'];
      this.employee = this.service.employeeList.filter((emp) => emp.empID === id )[0];
    } );

    this.getPercentage();
  }

  getPercentage() {
    this.pieChartData[0] = this.employee.attendance;
    this.pieChartData[1] = this.employee.leaves;
    this.showPercentage = (this.employee.attendance / (this.employee.attendance + this.employee.leaves));
  }
  ngOnDestroy() {
    // this.routerSubscription.unsubscribe();
  }
}
