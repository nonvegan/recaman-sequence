function getMs(fps) {
  return 1000 / fps;
}
function lerp(v0, v1, t) {
  return v0*(1-t)+v1*t
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mapValue(n, start1, stop1, start2, stop2, withinBounds) {
  const newval = ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  if (!withinBounds) {
    return newval;
  }
  if (start2 < stop2) {
    return constrain(newval, start2, stop2);
  } else {
    return constrain(newval, stop2, start2);
  }
}
export { getMs,lerp ,random,mapValue};
