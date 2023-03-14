import { Model, DataTypes } from 'sequelize';
import db from '../../db/config';

class Quarter extends Model {
  public async migration() {
    try {
      return await Quarter.findAll();
    } catch (error) {
      console.log(error);
    }
  }
}

Quarter.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    clave: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    periodo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    encuesta_periodo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    tableName: 'periodo',
    sequelize: db.getSequelizeMigration(),
    timestamps: false
  }
);

export default Quarter;
