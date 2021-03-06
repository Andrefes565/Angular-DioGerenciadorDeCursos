import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-list.component.html'
})

export class CourselistComponent implements OnInit { // OnInit faz uma operação quando o componente é inicializado

    filterCourses: Course[] = [];

    _courses: Course[] = [];

    _filterBy!: string;

    constructor(private courseService: CourseService) {}

    ngOnInit():void {
        this._courses = this.courseService.retrieveAll();
        this.filterCourses = this._courses;

    }

    set filter(value: string){
        this._filterBy = value;

        // find by name dinamico
        this.filterCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
}