import { Model, DataTypes } from 'sequelize';
import db from '../../db/config';

class AnswerTestComment extends Model {
  public async migration() {
    try {
      return await AnswerTestComment.findAll();
    } catch (error) {
      console.log(error);
    }
  }
}

AnswerTestComment.init(
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
    comentario: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'respuesta_evaluacion_comentario',
    sequelize: db.getSequelizeMigration(),
    timestamps: false
  }
);

export default AnswerTestComment;
