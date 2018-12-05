import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
// import { MarkAttendanceComponent } from './emp-list/emp-list.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmployeesComponent } from './employees/employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpDetailsGuard } from './emp-details/emp-details.guard';
import { MarkAttendanceComponent } from './mark-attendance/mark-attendance.component';
import { EmpListComponent } from './emp-list/emp-list.component';

const appRoutes: Routes = [
  { path: 'emplist', component: EmpListComponent },
  { path: 'markattendance', component: MarkAttendanceComponent },
  { path: 'empdetails', canActivate: [EmpDetailsGuard], component: EmpDetailsComponent },
  { path: 'empdetails/:id', canActivate: [EmpDetailsGuard], component: EmpDetailsComponent }
  // { path: 'pagenotfound', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MarkAttendanceComponent,
    EmpDetailsComponent,
    EmployeesComponent,
    PageNotFoundComponent,
    MarkAttendanceComponent,
    EmpListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    MatTabsModule,
    ChartsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
