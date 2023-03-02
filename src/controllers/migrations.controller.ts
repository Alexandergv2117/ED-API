import AnswerTestComment from '../models/migration_temp/answers_test_comment';
import AnswerTest from '../models/migration_temp/answers_test.model';
import Question from '../models/migration_temp/questions.model';
import QuestionTest from '../models/migration_temp/questions_test.model';
import Employee from '../models/migration_temp/employes.model';
import Quarter from '../models/migration_temp/quarters.model';
import QuarterDetail from '../models/migration_temp/quarters_details.model';
import Department from '../models/migration_temp/departments.model';
import Major from '../models/migration_temp/majors.model';
import Program from '../models/migration_temp/programs.model';
import Coordinator from '../models/migration_temp/coordinators.model';
import Student from '../models/migration_temp/students.model';
import StudentCourse from '../models/migration_temp/students_courses.model';
import Course from '../models/migration_temp/courses.model';

import { Request, Response } from 'express';

export default class MigrationsController {
    public async migration(req: Request, res: Response) {
        try {
            const answerTestComment = await AnswerTestComment.findAll();
            const answerTest = await AnswerTest.findAll();
            const question = await Question.findAll();
            const questionTest = await QuestionTest.findAll();
            const employee = await Employee.findAll();
            const quarter = await Quarter.findAll();
            const quarterDetail = await QuarterDetail.findAll();
            const department = await Department.findAll();
            const major = await Major.findAll();
            const program = await Program.findAll();
            const coordinator = await Coordinator.findAll();
            const student = await Student.findAll();
            const studentCourse = await StudentCourse.findAll();
            const course = await Course.findAll();

            return res.status(200).send({
                message: 'MIGRATION ROUTE SUCCESS',
            });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: 'ERROR DURING MIGRATION' });
        }
    }
}
