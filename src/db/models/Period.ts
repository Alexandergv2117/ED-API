import { DataTypes } from 'sequelize';
import db from '../config';

export const Period = db.sequelize.define(
  'Periodo',
  {
    id_periodo: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Estado: {
      type: DataTypes.INTEGER
    }
  },
  {
    tableName: 'Periodo',
    timestamps: false
  }
);
