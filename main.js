/* eslint-disable import/no-unresolved */
const { app, BrowserWindow } = require('electron');
const { dialog, ipcMain } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });

  win.loadFile('index.html');

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

// dialog is created here
ipcMain.on('getFile', (event) => {
  const file = dialog.showOpenDialog({ properties: ['openFile'] });
  event.sender.send('fileLoaded', file);
});
