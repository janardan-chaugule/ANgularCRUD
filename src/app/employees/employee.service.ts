import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

 
@Injectable()
export class EmployeeService {

    private listEmployees: Employee[] = [
        {
            id: 1,
            name: 'Mark',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'mark@pragimtech.com',
            dateOfBirth: new Date('10/25/1988'),
            department: '1',
            isActive: true,
            photoPath: 'assets/images/mark.png',
            password: null,
            confirmPassword: null
        },
        {
            id: 2,
            name: 'John',
            gender: 'Male',
            contactPreference: 'Phone',
            email: 'john@gmail.com',
            dateOfBirth: new Date('12/25/1988'),
            department: '3',
            phoneNumber: 7506419641,
            isActive: true,
            photoPath: 'assets/images/john.png',
            password: null,
            confirmPassword: null
        },
        {
            id: 3,
            name: 'Tanvi Chaugule',
            gender: 'Female',
            contactPreference: 'Phone',
            email: 'mary@gmail.com',
            dateOfBirth: new Date('12/25/1988'),
            department: '5',
            phoneNumber: 7506419641,
            isActive: true,
            photoPath: 'assets/images/tanvi.jpg',
            password: null,
            confirmPassword: null
        }
    ];

    getEmployees(): Employee[] {
        return this.listEmployees;
    }

    save(employee:Employee){
        this.listEmployees.push(employee);
    }

    getEmployee(id:number):Employee{
        return this.listEmployees.find(e => e.id === id);
    }
}