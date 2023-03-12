import { Model, DataTypes } from 'sequelize';
import db from '../../db/config';

class Course extends Model {
  public async migration() {
    try {
      return await Course.findAll();
    } catch (error) {
      console.log(error);
    }
  }
}

Course.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    clave: {
      type: DataTypes.STRING,
      allowNull: false
    },
    materia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    abrebiatura: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creditos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    departamento_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: 'materia',
    sequelize: db.getSequelizeMigration(),
    timestamps: false
  }
);

export default Course;
