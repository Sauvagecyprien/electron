 const electron = require('electron');
const app = require('./app');

let window;

function createWindow() {
    /* Créer une fenêtre de 800px par 600px sans bordures false */
    /* Créer une fenêtre de full screen avec bordure 1920 1080 true */
    window = new electron.BrowserWindow({
        width: 1920,
        height: 1080,
        frame: true
    });

    /* Si vous décommentez cette ligne, vous verrez la console de débug Chrome */
    /* window.webContents.openDevTools(); */

    /* Display the homepage of the server */
    window.loadURL('http://127.0.0.1:3000');

    /* Lorsque la fenêtre est fermée, on l'indique au système */
    window.on('closed', () => {
        window = null;
    });
}

/* On attend qu'Electron.js soit prêt pour créer la fenêtre */
electron.app.on('ready', function () {
    app.start(function () {
        createWindow();
    });
});

/* Cette fonction arrête totalement l'application
   lorsque toutes les fenêtres sont fermées */
electron.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron.app.quit();
    }
});

/* Fonction utile pour MacOS */
electron.app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});