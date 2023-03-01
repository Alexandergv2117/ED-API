import { Model, DataTypes } from 'sequelize';
import db from '../../db/config';

class Coordinator extends Model {
    public async migration() {
        try {
            return await Coordinator.findAll();
        } catch (error) {
            console.log(error);
        }
    }
}

Coordinator.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        personal_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        carrera_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'coordinador',
        sequelize: db.getSequelizeMigration(),
        timestamps: false,
    },
);

export default Coordinator;
