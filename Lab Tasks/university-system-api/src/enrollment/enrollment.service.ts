import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CourseService } from 'src/course/course.service';
import { NotificationService } from 'src/notification/notification.service';

@Injectable()
export class EnrollmentService {

    constructor(
        private readonly courseService:CourseService,
        @Inject(forwardRef(()=>NotificationService)) private readonly notificationService:NotificationService
    )
    {

    }

    enrollStudent(studentName:string, courseId:string)
    {
        const course=this.courseService.getCourseById(courseId);
        const notification=this.notificationService.sendNotification(
            studentName,
            `You enrolled in this course ${courseId}`
        );

        return {
            message: 'Enrolled successfully',
            student: studentName,
            course: course,
            notification: notification
        };
    }

    getEnrollments()
    {
        return { message: 'All enrollments ', data: [] };
    }
}