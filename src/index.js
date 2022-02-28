import {
  storage
} from 'uxp';
import {
  app,
  action,
  core
} from 'photoshop';
import pixels from 'image-pixels';
import './index.css';

//
// batchPlays
//

import batchSaveMask from './batchPlay/saveMask.js';
import batchNewFile from './batchPlay/newFile.js';
import batchGreenChannel from './batchPlay/greenChannel.js';
import batchRedChannel from './batchPlay/redChannel.js';
import batchEditNormal from './batchPlay/editNormal.js';
import batchDrawOutline from './batchPlay/drawOutline.js';
import batchSaveToFile from './batchPlay/saveToFile.js';

//
// Variables
//

const fs = storage.localFileSystem
const fileTypes = storage.fileTypes
let totalFiles = 0
let files = []
let outputFolder = null

//
// Selectors
//

const settings = document.getElementById("settings")
const runtime = document.getElementById("runtime")
const mode = document.getElementById("mode")
const opacity = document.getElementById("opacity")
const hexColor = document.getElementById("hexColor")
const calcMode = document.getElementById("calcMode")
const btnStart = document.getElementById("btnStart")
const btnLoad = document.getElementById("btnLoad")
const btnOutput = document.getElementById("btnOutput")
const btnNext = document.getElementById("btnNext")
const btnReset = document.getElementById("btnReset")
const progress = document.getElementById("progress")

//
// Functions
//

async function selectOutputFolder() {
  let subfolder = null
  const subfolderName = 'Focalizer Output'

  try {
    const userSelect = await fs.getFolder();
    subfolder = await userSelect.getEntries();
    subfolder = await subfolder.find(entry => entry.name.includes(subfolderName));

    if (typeof subfolder === 'undefined') {
      subfolder = await userSelect.createFolder(subfolderName)
    }

  } catch (err) {
    console.log(err);
  } finally {
    outputFolder = subfolder
  }
}

async function openFolder() {
  const loadedFiles = await fs.getFileForOpening({
    allowMultiple: true,
    types: fileTypes.images
  });

  if (!loadedFiles) {
    showAlert("No file was selected.");
    throw new Error("No file was selected.");
  }

  files = loadedFiles
  totalFiles = loadedFiles.length

  btnLoad.style.display = 'none'
  btnStart.style.display = 'inherit'
}

async function createFile() {
  const image = files.pop()
  try {
    await core.executeAsModal(async () => {
      await app.open(image)
      await action.batchPlay(batchNewFile, {
        synchronousExecution: true
      })
    });

  } catch (err) {
    console.log(err);
  }
}

async function getArea() {
  let returnValue = 0
  try {
    await require("photoshop").core.executeAsModal(async () => {
      await action.batchPlay(batchSaveMask, {
        synchronousExecution: true
      })

      const red = await action.batchPlay(batchRedChannel, {
        synchronousExecution: true
      })

      const green = await action.batchPlay(batchGreenChannel, {
        synchronousExecution: true
      })

      const totalArea = red[0].histogram[255] + green[0].histogram[255]
      const percentage = red[0].histogram[255] / totalArea * 100

      if (calcMode.value === 'filled') {
        returnValue = Math.round(percentage)
      } else {
        returnValue = 100 - Math.round(percentage)
      }
    });
  } catch (err) {
    throw new Error(err);
  }
  return returnValue
}

async function editNormal() {
  try {
    await require("photoshop").core.executeAsModal(async () => {
      await action.batchPlay(batchEditNormal(opacity.value), {
        synchronousExecution: true
      })
    });
  } catch (err) {
    throw new Error(err);
  }
}

async function drawOutline() {
  const rgb = {
    red: 255,
    green: 255,
    blue: 255
  }
  try {
    await require("photoshop").core.executeAsModal(async () => {
      await action.batchPlay(batchDrawOutline(rgb), {
        synchronousExecution: true
      })
    });

  } catch (err) {
    throw new Error(err);
  }
}

async function saveImageToFile(name) {
  const fileName = await outputFolder.createFile(name)
  const token = await fs.createSessionToken(fileName)
  try {
    await core.executeAsModal(async () => {
      await action.batchPlay(batchSaveToFile(token), {
        synchronousExecution: true
      })
    });

  } catch (err) {
    console.log(err);
  }
}

async function processImage() {
  const area = await getArea()
  await editNormal()

  let documentTitle = app.activeDocument.title
  documentTitle = documentTitle.substr(0, documentTitle.indexOf('.'))
  const name = documentTitle + '__' + area + '.jpg'

  await saveImageToFile(name)

  progress.value = (totalFiles - files.length) / totalFiles * 100

  if (files.length === 0) {
    reset()
  } else {
    createFile()
  }
}

async function start() {
  if (!outputFolder) {
    showAlert("Please select an output folder.");
    throw new Error("Output not selected");
  }

  if (mode.selectedIndex !== 0 && mode.selectedIndex !== 1) {
    mode.setAttribute('invalid')
    showAlert("Please select in which mode you would like to run the program.");
    throw new Error("Program mode not selected");
  }

  await createFile()
  settings.style.display = 'none'
  runtime.style.display = 'inherit'
  btnStart.style.display = 'none'
  btnNext.style.display = 'inherit'
  btnReset.style.display = 'inherit'
}

async function reset() {
  let totalFiles = 0
  let files = []
  settings.style.display = 'inherit'
  btnLoad.style.display = 'inherit'
  runtime.style.display = 'none'
  btnStart.style.display = 'none'
  btnNext.style.display = 'none'
  btnReset.style.display = 'none'
}

async function showAlert(message) {
  await app.showAlert(message);
}

//
// Listeners
//

window.addEventListener("load", () => {
  btnLoad.onclick = openFolder;
  btnOutput.onclick = selectOutputFolder;
  btnStart.onclick = start;
  btnNext.onclick = processImage;
  btnReset.onclick = reset;
});
