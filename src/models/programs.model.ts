import { Model, DataTypes } from 'sequelize';
import db from '../db/config';

class Program extends Model {
    public async migration() {
        try {
            return await Program.findAll();
        } catch (error) {
            console.log(error);
        }
    }
}

Program.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        clave: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        plan: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        carrera_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'plan',
        sequelize: db.getSequelizeMigration(),
        timestamps: false,
    },
);

export default Program;
