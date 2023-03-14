import { DataTypes } from 'sequelize';
import db from '../config';

export const CourseHasAlumno = db.sequelize.define(
  'Course_has_Alumno',
  {
    id_curso: {
      type: DataTypes.INTEGER
    },
    matricula: {
      type: DataTypes.INTEGER
    }
  },
  {
    tableName: 'Course_has_Alumno',
    timestamps: false
  }
);
