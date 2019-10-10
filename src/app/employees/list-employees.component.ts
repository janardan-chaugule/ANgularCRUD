import { Component, OnInit } from '@angular/core';
// import Employee Model
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

import {  Router } from '@angular/router';
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];
  employeeToDisplay: Employee;
  private arrayIndex = 1;
  dataFromChild: Employee;


  constructor(private _employeeService: EmployeeService,private _route : Router) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    console.log(this.dataFromChild);
    //this.employeeToDisplay = this.employees[0];
  }


  // nextEmployee(): void {
  //   if (this.employeeToDisplay.id <= 2) {
  //     this.employeeToDisplay = this.employees[this.arrayIndex];
  //     this.arrayIndex++;
  //   }
  //   else {
  //     this.employeeToDisplay = this.employees[0];
  //     this.arrayIndex = 1;
  //   }
  // }

  // handleNotify(eventData: Employee) {
  //   this.dataFromChild = eventData;
  //   console.log(this.dataFromChild);
  // }

  onClick(employeeId: number) {
    this._route.navigate(['/employees', employeeId]);
  }

}
