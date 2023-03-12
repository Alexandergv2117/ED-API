import { Model, DataTypes } from 'sequelize';
import db from '../../db/config';

class Major extends Model {
  public async migration() {
    try {
      return await Major.findAll();
    } catch (error) {
      console.log(error);
    }
  }
}

Major.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    carrera: {
      type: DataTypes.STRING,
      allowNull: false
    },
    abrebiatura: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nivel: {
      type: DataTypes.STRING,
      allowNull: false
    },
    departamento_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: 'carrera',
    sequelize: db.getSequelizeMigration(),
    timestamps: false
  }
);

export default Major;
