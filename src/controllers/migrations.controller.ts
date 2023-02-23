import AnswerTestComment from 'models/answers_test_comment';
import AnswerTest from 'models/answers_test.model';
import Question from 'models/questions.model';
import QuestionTest from 'models/questions_test.model';
import Employee from 'models/employes.model';
import Quarter from 'models/quarters.model';
import QuarterDetail from 'models/quarters_details.model';
import Department from 'models/departments.model';
import Major from 'models/majors.model';
import Program from 'models/programs.model';
import Coordinator from 'models/coordinators.model';
import Student from 'models/students.model';
import StudentCourse from 'models/students_courses.model';
import Course from 'models/courses.model';

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
