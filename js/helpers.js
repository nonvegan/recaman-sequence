function getMs(fps) {
  return 1000 / fps;
}
function lerp(v0, v1, t) {
  return v0*(1-t)+v1*t
}
export { getMs,lerp };
