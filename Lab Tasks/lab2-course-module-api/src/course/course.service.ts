import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  getAllCourses() {
    return {
      message: 'All courses ',
      data: [],
    };
  }

  getCourseById(id: string) {
    return {
      message: 'Course by id successfully',
      id: id,
    };
  }

  createCourse(createCourseDto: CreateCourseDto) {
    return {
      message: 'Course created successfully',
      data: createCourseDto,
    };
  }

  updateCourse(id: string, updateCourseDto: UpdateCourseDto) {
    return {
      message: 'Course updated successfully',
      id: id,
      data: updateCourseDto,
    };
  }

  patchCourse(id: string, updateCourseDto: UpdateCourseDto) {
    return {
      message: 'Course partially updated',
      id: id,
      updatedFields: Object.keys(updateCourseDto),
    };
  }

  deleteCourse(id: string) {
    return {
      message: 'Course deleted successfully',
      id: id,
    };
  }

  uploadCourseMaterial(id: string, file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Course material file is required');
    }

    return {
      message: 'Material uploaded successfully',
      courseId: id,
      filename: file.filename,
      path: file.path,
    };
  }
}