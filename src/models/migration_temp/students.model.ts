import { Model, DataTypes } from 'sequelize';
import db from '../../db/config';

class Student extends Model {
    public async login() {
        try {
            return await Student.findAll();
        } catch (error) {
            console.log(error);
        }
    }

    public async migration() {
        try {
            return await Student.findAll();
        } catch (error) {
            console.log(error);
        }
    }
}

Student.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        matricula: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido_paterno: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido_materno: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'email',
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'alumno',
        sequelize: db.getSequelizeMigration(),
        timestamps: false,
    },
);

export default Student;
