import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {

    getAllCourses(): string{

        return 'All Courses there';
    }

    getCourseById(id:string):string
    {
        return `Get Course with ID: ${id}`;
    }



}
