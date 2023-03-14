import { DataTypes } from 'sequelize';
import db from '../config';

export const Course = db.sequelize.define(
  'Course',
  {
    id_curso: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_periodo: {
      type: DataTypes.INTEGER
    },
    id_materia: {
      type: DataTypes.INTEGER
    },
    id_grupo: {
      type: DataTypes.INTEGER
    },
    id_docente: {
      type: DataTypes.INTEGER
    }
  },
  {
    tableName: 'Course',
    timestamps: false
  }
);
