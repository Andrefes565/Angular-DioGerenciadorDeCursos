import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent {

    courseId!: number;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {

        let id: any = this.activatedRoute.snapshot.paramMap.get('id');
        this.courseId = id;
    }
}