import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  empForm: FormGroup;
  education: string[]=[
    'Metric',
    'Diploma',
    'Graduate',
    'Post Graduate'
  ]
  constructor(private _fb:FormBuilder){ //service variable form builder
    this.empForm= this._fb.group({
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        gender: '',
        education: '',
        company: '',
        experience: '',
        package: '',
      })
  }
}
