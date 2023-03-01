import { Model, DataTypes } from 'sequelize';
import db from '../../db/config';

class Department extends Model {
    public async migration() {
        try {
            return await Department.findAll();
        } catch (error) {
            console.log(error);
        }
    }
}

Department.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        departamento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        abrebiatura: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'departamento',
        sequelize: db.getSequelizeMigration(),
        timestamps: false,
    },
);

export default Department;
