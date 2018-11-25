/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
const { ipcRenderer } = require('electron');

ipcRenderer.on('fileLoaded', (event, fileName) => {
  console.log(fileName);
});

function handleClick() {
  ipcRenderer.send('getFile');
}

document.getElementById('btn-file').addEventListener('click', handleClick);
