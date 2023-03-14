import { Model, DataTypes } from 'sequelize';
import db from '../../db/config';

class StudentCourse extends Model {
  public async migration() {
    try {
      return await StudentCourse.findAll();
    } catch (error) {
      console.log(error);
    }
  }
}

StudentCourse.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    alumno_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    periodo_detalle_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    calificacion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'lista_alumno_periodo',
    sequelize: db.getSequelizeMigration(),
    timestamps: false
  }
);

export default StudentCourse;
