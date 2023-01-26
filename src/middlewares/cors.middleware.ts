export const corsOptions = {
    origin: (origin: any, callback: any) => {
        // console.log(origin);
        if (process.env.NODE_ENV === 'production') {
            // En producción, permitir solo orígenes específicos
            const whitelist = ['http://localhost:3000', 'https://webbetaautopartes.azurewebsites.net/'];
            if (whitelist.indexOf(origin) !== -1 || !origin) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        } else {
            // En desarrollo, permitir cualquier origen
            callback(null, true);
        }
    },
};
