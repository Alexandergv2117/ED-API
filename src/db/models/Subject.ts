import { DataTypes } from 'sequelize';
import db from '../config';
export const Subject = db.sequelize.define(
  'Materia',
  {
    id_materia: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre_materia: { type: DataTypes.STRING },
    nombre_corto_materia: { type: DataTypes.STRING }
  },
  {
    tableName: 'Materia',
    timestamps: false
  }
);
