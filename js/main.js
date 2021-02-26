import { getMs, lerp } from "./helpers.js";
import { RecamanArc } from "./classes.js";

const canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */ const ctx = canvas.getContext("2d");
const optionsDiv = document.getElementById("optionsDiv");
const resetButton = document.getElementById("resetButton");
const width = Math.min(window.innerWidth, window.innerHeight) / 1.1;
const height = Math.min(window.innerWidth, window.innerHeight) / 1.72;

let sequence = [];
let sequenceAssist = [];
let number = 0;
let maxNumber = 1;
let counter = 0;
let scale = 0;

function setup() {
  canvas.width = width;
  canvas.height = height;
  ctx.translate(0, height / 2);
  ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--fuchsia");
  ctx.lineWidth = 0.5;
  resetButton.addEventListener("click", reset);
}

function draw() {
  ctx.save();
  scale = lerp(scale, width / maxNumber, 0.2);
  ctx.scale(scale, scale);
  for (const number of sequence) {
    number.draw(ctx);
  }
  ctx.restore();
}

function update() {
  let next = number - counter;
  if (next < 0 || sequenceAssist[next]) {
    next = number + counter;
  }
  sequence.push(new RecamanArc(number, next, counter));
  sequenceAssist[next] = true;
  number = next;
  if (number > maxNumber) maxNumber = number;
  counter++;
}

function clear() {
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}

function reset() {
  sequence = [];
  sequenceAssist = [];
  number = 0;
  maxNumber = 1;
  counter = 0;
  scale = 0;
}
setup();
setInterval(() => {
  update();
  clear();
  draw();
}, getMs(30));
