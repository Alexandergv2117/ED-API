import { Model, DataTypes } from 'sequelize';
import db from '../../db/config';

class AnswerTest extends Model {
    public async migration() {
        try {
            return await AnswerTest.findAll();
        } catch (error) {
            console.log(error);
        }
    }
}

AnswerTest.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        pregunta_evaluacion_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        puntos: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'respuesta_evaluacion',
        sequelize: db.getSequelizeMigration(),
        timestamps: false,
    },
);

export default AnswerTest;
