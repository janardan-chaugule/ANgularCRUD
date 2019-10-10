import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { CreateEmployeeComponent } from './create-employee.component';
import { from } from 'rxjs';

@Injectable()
export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent> {
    canDeactivate(component: CreateEmployeeComponent): boolean {
        if (component.createEmployeeForm.dirty) {
            return confirm('Are you sure you want to discard your changes?');
        }
        return true;
    }
}