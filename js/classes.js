class RacamanArc {
  constructor(current, next, counter) {
    this.current = current;
    this.next = next;
    this.dir = counter % 2;
  }

  draw(/** @type {CanvasRenderingContext2D} */ ctx) {
    ctx.beginPath();
    ctx.arc((this.current + this.next) / 2, 0, Math.abs(this.next - this.current) / 2, 0, Math.PI,!this.dir);
    ctx.stroke();
  }
}

export { RacamanArc };
