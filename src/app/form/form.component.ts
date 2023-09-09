import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  teachers = ['S. RANI', 'S.DHARMARAJ', 'ELAVARASAN K', 'STEPEHN R', 'BUVANESHWARI', 'KUMAR M', 'RAJESH P', 'SUNDARAMBAL R', 'BALAJI. M', 'VIJAYAN. R', 'S. PANDIAN', 'M. AMUTHA', 'NIRMALA J', 'MAHESHWARI R', 'TR. G. THANIGAIMALAI', 'SARASWATHy R', 'KALYANI N', 'S. JOHN BOSCO'];
  activites = ['Bridge Building', 'Paper Circuit', 'Introdiction to breadboard and Series circuit', 'Parallel Circuit'];
  responses = ['Confident', 'Happy/Excited', 'Bored', 'Disappointed/Discouraged']

  feedbackForm = this.fb.group({
    teacherName: ['', Validators.required],
    activityName: ['', Validators.required],
    totalStudents: ['', Validators.required],
    femaleStudents: ['', Validators.required],
    totalGroupsFormed: ['', Validators.required],
    groupsCompletedActivity: ['', Validators.required],
    studentResponse: ['', Validators.required],
    anythingElse: ['']
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert(this.feedbackForm.value)
  }

}
