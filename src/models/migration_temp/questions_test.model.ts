import { Model, DataTypes } from 'sequelize';
import db from '../../db/config';

class QuestionTest extends Model {
  public async migration() {
    try {
      return await QuestionTest.findAll();
    } catch (error) {
      console.log(error);
    }
  }
}

QuestionTest.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    periodo_detalle_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pregunta_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: 'pregunta_evaluacion',
    sequelize: db.getSequelizeMigration(),
    timestamps: false
  }
);

export default QuestionTest;
