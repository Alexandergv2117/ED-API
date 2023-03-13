import { DataTypes } from 'sequelize';
import db from '../config';

export const Group = db.sequelize.define(
  'Grupo',
  {
    id_grupo: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    clave_grupo: {
      type: DataTypes.STRING
    },
    id_carrera: {
      type: DataTypes.INTEGER
    }
  },
  {
    tableName: 'Grupo',
    timestamps: false
  }
);
