import App from './app';

const AppClass: App = new App();
const app = AppClass.app;
let port = AppClass.port;

const startServer = () => {
  app.listen(port, () => {
    console.log(
      `😎 [ED-API]: API is Running 🏁🏁🏁 http://localhost:${AppClass.port} 🏁🏁🏁 ✔`
    );
  }).on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      console.log(
        `Port ${port} is already in use. Trying another port...`
      );
      port += 1;
      startServer();
    } else {
      console.log(err);
    }
  });
};

startServer();

export default app;
