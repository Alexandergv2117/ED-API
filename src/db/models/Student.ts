import { DataTypes } from 'sequelize';
import db from '../config';
export const Student = db.sequelize.define(
  'Alumno',
  {
    matricula: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    apellido_paterno: { type: DataTypes.STRING },
    apellido_materno: { type: DataTypes.STRING },
    nombre: { type: DataTypes.STRING }
  },
  {
    tableName: 'Alumno',
    timestamps: false
  }
);
