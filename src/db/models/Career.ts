import { DataTypes } from 'sequelize';
import db from '../config';
export const Career = db.sequelize.define(
  'Carrera',
  {
    id_carrera: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombre_carrera: {
      type: DataTypes.STRING 
    },
    nombre_corto: {
      type: DataTypes.STRING
    },
    correo_institucional: {
      type: DataTypes.STRING
    }
  },
  {
    tableName: 'Carrera',
    timestamps: false
  }
);
