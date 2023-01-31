/**
 * @type HTMLCanvasElement
 */
// Selecting elements
const canvas = document.getElementById('canvas');
const guides = document.getElementById('guides');
const inputColor = document.getElementById('inputColor');
const buttonClear = document.getElementById('buttonClear');
const guideToggles = document.getElementById('guideToggle');
const drawingContext = canvas.getContext('2d');

const CELL_SIDE_COUNT = 8;
const cellPixelLength = canvas.width / CELL_SIDE_COUNT;
const colorHistory = {};

//Set default color
inputColor.value = '#009578';

// Initialize the canvas background
drawingContext.fillStyle = "#ffffff";
drawingContext.fillRect(0, 0, canvas.width, canvas.height);
