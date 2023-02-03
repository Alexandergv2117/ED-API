import App from './app';

const AppClass: App = new App();

const app = AppClass.app;

try {
    app.listen(AppClass.port, () => {
        console.log(
            `😎 [ED-API]: API is Running 🏁🏁🏁 http://localhost:${AppClass.port} 🏁🏁🏁 ✔`,
        );
    });
} catch (error) {
    console.log(error);
}

export default app;
