import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmpDetailsGuard implements CanActivate {
  constructor(private router: Router,
              private service: EmployeeService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (next.url.length > 1) {
        const id = +next.url[1].path;
        if (isNaN(id) || id < 1 || !(this.service.employeeList) ) {
          // alert('Please select a board');
          this.router.navigate(['/emplist']);
          return false;
        }
      } else {
        alert('Please select an Employee');
        this.router.navigate(['/emplist']);
        return false;
      }
      return true;
  }
}
