import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  teachers = ['S. RANI', 'S.DHARMARAJ', 'ELAVARASAN K', 'STEPEHN R', 'BUVANESHWARI', 'KUMAR M', 'RAJESH P', 'SUNDARAMBAL R', 'BALAJI. M', 'VIJAYAN. R', 'S. PANDIAN', 'M. AMUTHA', 'NIRMALA J', 'MAHESHWARI R', 'TR. G. THANIGAIMALAI', 'SARASWATHy R', 'KALYANI N', 'S. JOHN BOSCO'];
  activites = ['Bridge Building', 'Paper Circuit', 'Introdiction to breadboard and Series circuit', 'Parallel Circuit'];
  responses = [
      {response:'Confident',selected:false, id:0},
      {response:'Happy/Excited',selected:false, id:1},
      {response:'Bored',selected:false, id:2},
      {response:'Disappointed/Discouraged',selected:false, id:3}
  ]
  //['Confident', 'Happy/Excited', 'Bored', 'Disappointed/Discouraged']

  feedbackForm = this.fb.group({
    teacherName: ['', Validators.required],
    activityName: ['', Validators.required],
    totalStudents: ['', Validators.required],
    femaleStudents: ['', Validators.required],
    totalGroupsFormed: ['', Validators.required],
    groupsCompletedActivity: ['', Validators.required],
    studentResponseAfterClass: this.buildStudentResponses(),
    anythingElse: ['']
  });

  get studentResponseAfterClass() {
    return this.feedbackForm.get('studentResponseAfterClass') as FormArray;
  }

  buildStudentResponses(){
    const arr = this.responses.map(o=>{
      return this.fb.control(o.selected,);
    })
    return this.fb.array(arr);
  }

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert(this.feedbackForm.value);
    console.log(this.feedbackForm.value);
  }

}
