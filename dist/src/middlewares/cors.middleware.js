"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
exports.corsOptions = {
    origin: (origin, callback) => {
        // console.log(origin);
        if (process.env.NODE_ENV === 'production') {
            // En producción, permitir solo orígenes específicos
            const whitelist = [
                'http://localhost:5000',
                'https://example-domain/'
            ];
            if (whitelist.indexOf(origin) !== -1 || !origin) {
                callback(null, true);
            }
            else {
                callback(new Error('Not allowed by CORS'));
            }
        }
        else {
            // En desarrollo, permitir cualquier origen
            callback(null, true);
        }
    }
};
//# sourceMappingURL=cors.middleware.js.map