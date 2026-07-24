import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {

    getAllCourses()
    {
        return { message:'All courses',
            data: [] };
    }

    getCourseById(id:string)
    {
        return { message:'Course by id', 
        id: id };
    }

    createCourse(name:string, code:string)
    {
        return {
            message: 'Course created',
            data: { name: name, code: code }
        };
    }
}