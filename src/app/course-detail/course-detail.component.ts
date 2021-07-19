import { Course } from '../course';
import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  @Input() course! : Course;

  constructor() { }

  ngOnInit(): void {
  }

}
