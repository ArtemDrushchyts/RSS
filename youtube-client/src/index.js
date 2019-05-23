import App from './controllers/App';

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    const app = new App();
    app.start();
  }
});
