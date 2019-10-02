import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {Employee} from '../models/employee.model';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  objEmployee: Employee = {
    id: null,
    name: null,
    gender: '',
    contactPreference: '',
    phoneNumber: null,
    email: '',
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null
  };

  // gender = 'male';
  // isActive = true;
  // department = 3;
   previewPhoto = false;
  // create a property of type Partial<BsDatepickerConfig>
  datePickerConfig: Partial<BsDatepickerConfig>;

  constructor() {

    this.datePickerConfig =Object.assign({},
      {
        containerClass : 'theme-dark-blue',
        showWeekNumbers: true,
        minDate: new Date(2018, 0, 1),
      maxDate: new Date(2018, 11, 31),
      dateInputFormat: 'DD/MM/YYYY'

      }
      )
   }

  ngOnInit() {
  }


  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm);
  }

  togglePhotoPreview():void{
    this.previewPhoto = !this.previewPhoto;
  }
}
