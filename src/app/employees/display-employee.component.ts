import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
// OnChanges, SimpleChanges
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit
//,OnChanges
{

  @Input()
  objEmployee: Employee;

  @Output()
  displayNotify :EventEmitter<Employee> = new EventEmitter<Employee>();


  constructor() { }

  ngOnInit() {
  }

  // @Input()
  // set objEmployee(val: Employee) {
  //   console.log('Previous : ' + (this._employee ? this._employee.name : 'NULL'));
  //   console.log('Current : ' + val.name);
  //   this._employee = val;
  // }

  // // This getter is called when reading and displaying data
  // get objEmployee(): Employee {
  //   return this._employee;
  // }
  // ngOnChanges(changes: SimpleChanges) {

  //   //console.log(changes);
  //   const previousEmployee = <Employee>changes.objEmployee.previousValue;
  //   const currentEmployee = <Employee>changes.objEmployee.currentValue;

  //   console.log('Previous : ' + (previousEmployee ? previousEmployee.name : 'NULL'));
  //   console.log('Current : ' + currentEmployee.name);
  // }

  // handleClick(){
  //   this.displayNotify.emit(this.objEmployee);
  // }

  getNameAndGender() : string{
    return this.objEmployee.name+' '+this.objEmployee.gender;
  }

}
