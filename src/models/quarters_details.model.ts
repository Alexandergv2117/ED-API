import { Model, DataTypes } from 'sequelize';
import db from '../db/config';

class QuarterDetail extends Model {
    public async migration() {
        try {
            return await QuarterDetail.findAll();
        } catch (error) {
            console.log(error);
        }
    }
}

QuarterDetail.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        periodo_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        carrera_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        personal_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        materia_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        grupo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        plan_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'periodo_detalle',
        sequelize: db.getSequelize(),
        timestamps: false,
    },
);

export default QuarterDetail;
