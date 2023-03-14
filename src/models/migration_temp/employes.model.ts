import { Model, DataTypes } from 'sequelize';
import db from '../../db/config';

class Employee extends Model {
  public async migration() {
    try {
      return await Employee.findAll();
    } catch (error) {
      console.log(error);
    }
  }
}

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido_paterno: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido_materno: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sexo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'personal',
    sequelize: db.getSequelizeMigration(),
    timestamps: false
  }
);

export default Employee;
