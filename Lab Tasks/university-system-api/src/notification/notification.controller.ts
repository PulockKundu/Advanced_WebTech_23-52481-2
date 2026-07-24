import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {

    constructor(private readonly notificationService:NotificationService)
    {

    }

    @Post('send')
    sendNotification(@Body() notification:any)
    {
        return this.notificationService.sendNotification(
            notification.studentName,
            notification.message
        );
    }

    @Post('check')
    checkEnrollmentAndNotify(@Body() notification:any)
    {
        return this.notificationService.checkEnrollmentAndNotify(
            notification.studentName,
            notification.courseId
        );
    }
}