import { DataTypes } from 'sequelize';
import db from '../config';

export const Teacher = db.sequelize.define(
  'Docente',
  {
    id_docente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING 
    },
    apellido_materno: {
      type: DataTypes.STRING
    },
    apellido_paterno: {
      type: DataTypes.STRING
    },
    correo: {
      type: DataTypes.STRING
    }
  },
  {
    tableName: 'Docente',
    timestamps: false
  }
);
