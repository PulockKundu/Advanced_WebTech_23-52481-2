import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { EnrollmentService } from 'src/enrollment/enrollment.service';

@Injectable()
export class NotificationService {

    constructor(@Inject(forwardRef(()=>EnrollmentService)) private readonly enrollmentService:EnrollmentService)
    {

    }

    sendNotification(studentName:string, message:string)
    {
        return {
            message: 'Notification sent successfully',
            student: studentName,
            notification: message
        };
    }

    checkEnrollmentAndNotify(studentName:string, courseId:string)
    {
        const enrollments=this.enrollmentService.getEnrollments();

        return {
            message: 'Enrollment check and notification send',
            student: studentName,
            courseId: courseId,
            enrollmentData: enrollments
        };
    }
}