import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList: Employee[];
  private JSONUrl = 'https://ng-emp-attendance.firebaseio.com/employee.json';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>(this.JSONUrl)
    .pipe(
      tap(data => this.employeeList = data)
    );
  }

  saveEmployeeList(data) {
    return this.http.put(this.JSONUrl, data);
  }

}
