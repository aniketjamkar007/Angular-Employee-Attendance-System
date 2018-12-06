import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-attendance-summary',
  templateUrl: './attendance-summary.component.html',
  styleUrls: ['./attendance-summary.component.css']
})
export class AttendanceSummaryComponent implements OnInit {
  employeeList: Employee[];
  buttonFlag = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  // public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartLabels: string[] = [];
  public barChartLabel: string[];
  public barChartType = 'bar';
  public barChartLegend = false;

  public barChartData: any[] = [
    {data: [], label: 'Present'},
    {data: [], label: 'Absent'}
  ];

  public presentData: number[] = [];
  public absentData: number[] = [];

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.service.getEmployees()
    .subscribe(
      (data) => this.employeeList = data
    );
    // this.barChartLabel = this.getChartDataAndLabels();
  }

  getChartDataAndLabels() {
    this.buttonFlag = false;
    this.employeeList.forEach(element => {
      element.empID = element.empID - 1;
      this.barChartLabels.push(this.employeeList[element.empID].firstName);
      this.presentData.push(this.employeeList[element.empID].attendance);
      this.absentData.push(this.employeeList[element.empID].leaves);
    });
    this.barChartLabel = this.barChartLabels;
    this.barChartData[0].data = this.presentData;
    this.barChartData[1].data = this.absentData;
    // console.log(this.barChartData[1]);
  }

}
