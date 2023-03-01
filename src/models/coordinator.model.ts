import db from '../db/config';

export default class Coordinator {
    public async getPeriodsByCareer(carreraId: number) {
        return db.sequelize
            .query('CALL sp_obtener_periodos(?)', {
                replacements: [carreraId],
                type: 'RAW',
            })
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
