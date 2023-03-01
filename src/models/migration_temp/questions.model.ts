import { Model, DataTypes } from 'sequelize';
import db from '../../db/config';

class Question extends Model {
    public async migration() {
        try {
            return await Question.findAll();
        } catch (error) {
            console.log(error);
        }
    }
}

Question.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        pregunta: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'pregunta',
        sequelize: db.getSequelizeMigration(),
        timestamps: false,
    },
);

export default Question;
