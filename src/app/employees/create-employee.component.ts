import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('employeeForm',{static:false}) public createEmployeeForm: NgForm;

  
  objEmployee: Employee = {
    id: null,
    name: null,
    gender: '',
    contactPreference: '',
    phoneNumber: null,
    email: '',
    dateOfBirth: null,
    department:'-1',
    isActive: null,
    photoPath: null,
    password:null,
    confirmPassword:null
  };

  departmentlist: any[] = [
    {
      id: 1,
      name: 'Help Desk'

    },
    {
      id: 2,
      name: 'HR'

    },
    {
      id: 3,
      name: 'IT'

    },
    {
      id: 4,
      name: 'Outsource'

    }
  ]



  // gender = 'male';
  // isActive = true;
  // department = 3;
  previewPhoto = false;
  // create a property of type Partial<BsDatepickerConfig>
  datePickerConfig: Partial<BsDatepickerConfig>;

  constructor(private _employeeService: EmployeeService,
    private _router: Router) {

    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: true,
        
        dateInputFormat: 'DD/MM/YYYY'

      }
    )
  }

  ngOnInit() {
  }


  saveEmployee(): void {
    this._employeeService.save(this.objEmployee);
    this._router.navigate(['list']);
  }

  togglePhotoPreview(): void {
    this.previewPhoto = !this.previewPhoto;
  }
}
