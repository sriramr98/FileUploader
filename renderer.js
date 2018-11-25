/* eslint-disable no-unused-vars */
const { ipcRenderer } = require('electron');


function handleClick() {
  ipcRenderer.send('getFile');
}

document.getElementById('btn-file').addEventListener('click', handleClick);
