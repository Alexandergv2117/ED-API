# ED-API

##Breve descripción del proyecto.

Este proyecto es una API para la evaluación de docentes, alumnos. La aplicación proporciona una plataforma en línea para la evaluación de los profesores por parte de los estudiantes. La API está desarrollada en Express con TypeScript y utiliza una base de datos para almacenar los datos de los usuarios, las evaluaciones y los resultados.

La estructura de carpetas del proyecto está diseñada para facilitar el mantenimiento y la escalabilidad. Los archivos se organizan en controladores, modelos, rutas y otros módulos relacionados con la base de datos y los servicios de la aplicación.

En resumen, este proyecto es una herramienta valiosa para evaluar a los docentes y mejorar la calidad de la enseñanza en las instituciones educativas.

Requerimientos
Node.js >= v16.14.1
Docker (opcional)

##Instalación

1. Clonar el repositorio:

    ```sh
    git clone https://github.com/usuario/ED-API.git
    ```

2. Instalar las dependencias:

    ```sh
    cd ED-API
    npm install
    ```

3. Crear el archivo `.env` en la raíz del proyecto y configurar las variables de entorno necesarias.

4. Compilar el proyecto:

    ```sh
    npm run build
    ```

5. Iniciar el servidor:

    ```sh
    npm start
    ```

6. Para ejecutar en modo de desarrollo:

    ```sh
    npm run dev
    ```

7. Para ejecutar las pruebas:

    ```sh
    npm test
    ```

8. Para formatear el código:

    ```sh
    npm run format
    ```

Si se desea usar Docker, se debe tener instalado Docker en la máquina, y se puede ejecutar el proyecto con Docker Compose:

1. Ejecutar el contenedor:

    ```sh
    docker-compose up
    ```

2. Acceder a la aplicación en el puerto especificado en el archivo `docker-compose.yml`.

3. Acceder a PHPMyAdmin en el puerto especificado en el archivo `docker-compose.yml`.

#Instalar prettier para formatear el codigo
![image](https://user-images.githubusercontent.com/85083888/219972326-637d43d1-518f-4af3-90fe-70688180bcfb.png)

Seleccionar cambiar como formateador predeterminado

`Ctrl+Shift+P`
![image](https://user-images.githubusercontent.com/85083888/219972576-4c3bfa51-6ffe-4018-9cc2-143042e1808d.png)

Cambiamos el predeterminado
![image](https://user-images.githubusercontent.com/85083888/219972597-01b3df2b-ecd1-4f27-ab3c-ddca01b27b83.png)

Seleccionamos prettier
![image](https://user-images.githubusercontent.com/85083888/219972614-b9cd6b27-0b1e-49e1-a223-e863d7b11d88.png)
#Estructura de carpetas:
├── src
│   ├── controllers
│   │   └── AuthController.ts
│   ├── middlewares
│   │   └── corsOptions.ts
│   ├── models
│   │   └── AnswerTestComment.ts
│   └── routers
│       ├── AuthRouter.ts
│       └── index.ts
├── app.ts
├── index.ts
└── test



#Explicación:

`controllers`: carpeta que contiene todos los controladores para manejar las solicitudes HTTP entrantes. En este ejemplo se encuentra el archivo `AuthController.ts` que exporta una clase que maneja la solicitud login.

`middlewares`: carpeta que contiene todos los middleware personalizados para la aplicación. En este ejemplo se encuentra el archivo `corsOptions.ts` que exporta una constante con las opciones de configuración para permitir solicitudes `CORS`.

`models`: carpeta que contiene todos los modelos de datos para interactuar con la base de datos. En este ejemplo se encuentra el archivo `AnswerTestComment.ts` que exporta una clase que extiende el modelo Sequelize y define la estructura de la tabla respuesta_evaluacion_comentario.

`router`: carpeta que contiene todas las rutas de la aplicación. En este ejemplo se encuentran dos archivos:

`AuthRouter`.ts: exporta una clase que define las rutas para el controlador `AuthController`.

En la carpeta `router` sobre el archivo `index.ts`: exporta una clase que define todas las rutas de la aplicación. En este archivo se importa la clase `AuthRouter` y se define la ruta base /auth para todas las rutas del controlador `AuthController`.

`app.ts` es el archivo que contiene la configuración y la instancia de la aplicación Express.
`index.ts` es el archivo que inicia la aplicación y la hace escuchar en el puerto especificado.
`test` es la carpeta que contiene los tests de la aplicación.
